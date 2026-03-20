import * as THREE from "three";

const textureSize = 256;

class EmojiPhysicsDemo {
  constructor() {
    this.container = document.querySelector("[data-gravity-canvas-container]");
    this.emptyState = document.querySelector("[data-gravity-empty-state]");
    this.emojiIndex = 0;
    this.emojiChars = ["😀", "😍", "😝", "🤨", "😵", "😎", "😵‍💫"];
    this.scene = null;
    this.camera = null;
    this.renderer = null;
    this.world = null;
    this.emojis = [];
    this.mouse = { x: 0, y: 0 };
    this.isPointerInside = false;
    this.maxEmojis = 500;
    this.isMouseDown = false;
    this.spawnInterval = null;
    this.walls = [];
    this.emojiSize = 1;
    this.emoji = this.emojiChars[this.emojiIndex];
    this.gravityY = -10;
    this.gravityX = 2;
    this.fieldMode = "off";
    this.fieldRadius = 4.75;
    this.fieldStrength = 22;
    this.emptyStateVisible = true;
    this.isInitialized = false;
    this.animationId = null;
    this.emojiTypes = {};
    this.emojiTypeOrder = [];
    this.fieldButtons = [];
    this.init();
  }

  init() {
    if (this.container.offsetWidth === 0 || this.container.offsetHeight === 0) {
      this.waitForVisibility();
      return;
    }

    const ww = this.container.clientWidth;
    this.emojiSize = ww < 800 ? 1.35 : 1.25;
    this.scene = new THREE.Scene();

    const aspect = this.container.clientWidth / this.container.clientHeight;
    const frustumSize = 20;

    this.camera = new THREE.OrthographicCamera(
      (-frustumSize * aspect) / 2,
      (frustumSize * aspect) / 2,
      frustumSize / 2,
      -frustumSize / 2,
      0.1,
      1000,
    );
    this.camera.position.z = 10;

    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.outputColorSpace = THREE.LinearSRGBColorSpace;
    this.renderer.toneMapping = THREE.NoToneMapping;
    this.renderer.toneMappingExposure = 1;
    this.renderer.domElement.id = "emoji-gravity-canvas";
    this.container?.appendChild(this.renderer.domElement);

    this.world = new CANNON.World();
    this.world.gravity.set(this.gravityX, this.gravityY, 0);
    this.world.broadphase = new CANNON.NaiveBroadphase();
    this.world.defaultContactMaterial.friction = 0.001;
    this.world.defaultContactMaterial.restitution = 0.2;

    this.createWalls();

    const ambientLight = new THREE.AmbientLight(0xffffff, 1);
    this.scene.add(ambientLight);

    this.setupEmojiTextures();
    this.setupEmoji(this.emoji);
    this.setupFieldControls();
    this.setupEventListeners();
    this.animate();
    this.isInitialized = true;
  }

  setupFieldControls() {
    this.fieldButtons = Array.from(document.querySelectorAll("[data-field-mode]"));

    this.fieldButtons.forEach((button) => {
      button.addEventListener("click", () => {
        this.fieldMode = button.dataset.fieldMode ?? "off";
        this.fieldButtons.forEach((candidate) => {
          candidate.classList.toggle("is-active", candidate === button);
        });
      });
    });
  }

  waitForVisibility() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !this.isInitialized) {
          this.init();
          observer.disconnect();
        }
      });
    });
    observer.observe(this.container);
  }

  createWalls() {
    const aspect = this.container.clientWidth / this.container.clientHeight;
    const frustumSize = 20;
    const width = frustumSize * aspect;
    const height = frustumSize;
    const wallThickness = 2;

    this.walls.forEach((wall) => this.world.removeBody(wall));
    this.walls = [];

    const bottomWall = new CANNON.Body({ mass: 0 });
    bottomWall.addShape(new CANNON.Box(new CANNON.Vec3(width / 2, wallThickness / 2, 1)));
    bottomWall.position.set(0, -height / 2 - wallThickness / 2, 0);
    this.world.addBody(bottomWall);
    this.walls.push(bottomWall);

    const topWall = new CANNON.Body({ mass: 0 });
    topWall.addShape(new CANNON.Box(new CANNON.Vec3(width / 2, wallThickness / 2, 1)));
    topWall.position.set(0, height / 2 + wallThickness / 2, 0);
    this.world.addBody(topWall);
    this.walls.push(topWall);

    const leftWall = new CANNON.Body({ mass: 0 });
    leftWall.addShape(new CANNON.Box(new CANNON.Vec3(wallThickness / 2, height / 2, 1)));
    leftWall.position.set(-width / 2 - wallThickness / 2, 0, 0);
    this.world.addBody(leftWall);
    this.walls.push(leftWall);

    const rightWall = new CANNON.Body({ mass: 0 });
    rightWall.addShape(new CANNON.Box(new CANNON.Vec3(wallThickness / 2, height / 2, 1)));
    rightWall.position.set(width / 2 + wallThickness / 2, 0, 0);
    this.world.addBody(rightWall);
    this.walls.push(rightWall);
  }

  createEmojiTexture(emoji) {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    canvas.width = textureSize;
    canvas.height = textureSize;
    context.clearRect(0, 0, textureSize, textureSize);
    context.font = "96px Arial";
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.fillText(emoji, textureSize / 2, textureSize / 2);

    const texture = new THREE.CanvasTexture(canvas);
    texture.needsUpdate = true;
    return texture;
  }

  createInstancedMeshForEmojiType(emoji) {
    const geometry = new THREE.CircleGeometry(this.emojiSize, textureSize);
    const texture = this.emojiTypes[emoji].texture;
    const material = new THREE.MeshBasicMaterial({
      map: texture,
      transparent: true,
      side: THREE.DoubleSide,
    });

    const instancedMesh = new THREE.InstancedMesh(geometry, material, this.maxEmojis);
    instancedMesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    this.scene.add(instancedMesh);

    const matrix = new THREE.Matrix4();
    matrix.makeScale(0, 0, 0);
    for (let i = 0; i < this.maxEmojis; i++) {
      instancedMesh.setMatrixAt(i, matrix);
    }
    instancedMesh.instanceMatrix.needsUpdate = true;

    this.emojiTypes[emoji].geometry = geometry;
    this.emojiTypes[emoji].material = material;

    return instancedMesh;
  }

  setupEmoji(emoji) {
    if (!this.emojiTypes[emoji]) {
      const texture = this.createEmojiTexture(emoji);
      this.emojiTypes[emoji] = {
        texture,
        instancedMesh: null,
        geometry: null,
        material: null,
        count: 0,
      };
      this.emojiTypes[emoji].instancedMesh = this.createInstancedMeshForEmojiType(emoji);
      this.emojiTypeOrder.push(emoji);
    }
  }

  setupEmojiTextures() {
    this.emojiChars.forEach((emoji) => {
      this.setupEmoji(emoji);
    });
  }

  createEmoji(x, y, velocityX = 0, velocityY = 0) {
    if (this.emojis.length >= this.maxEmojis) {
      this.removeOldestEmoji();
    }

    this.setupEmoji(this.emojiChars[this.emojiIndex]);

    const emojiType = this.emojiTypes[this.emojiChars[this.emojiIndex]];
    const instanceIndex = emojiType.count;

    const body = new CANNON.Body({
      mass: 0.5 + Math.random() * 1,
      material: new CANNON.Material({
        friction: 0.02,
        restitution: 0.0,
      }),
    });
    body.addShape(new CANNON.Sphere(this.emojiSize * 0.38));
    body.position.set(x, y, 0);

    const randomX = (Math.random() - 0.5) * 0.4;
    const randomY = (Math.random() - 0.5) * 0.2;
    body.velocity.set(velocityX + randomX, velocityY + randomY, 0);

    const speed = Math.sqrt(velocityX * velocityX + velocityY * velocityY);
    body.angularVelocity.set(0, 0, speed * 0.5 * (Math.random() - 0.5) * 2);
    body.linearDamping = 0.01;
    body.angularDamping = 0.02;

    this.world.addBody(body);

    const emojiObj = {
      body,
      instanceIndex,
      emojiType: this.emojiChars[this.emojiIndex],
    };
    this.emojis.push(emojiObj);

    const matrix = new THREE.Matrix4();
    matrix.makeTranslation(x, y, 0);
    emojiType.instancedMesh.setMatrixAt(instanceIndex, matrix);
    emojiType.instancedMesh.instanceMatrix.needsUpdate = true;
    emojiType.count++;
  }

  createEmojiFountain(x, y, continuous = false) {
    const emojiCount = continuous ? 3 : 8 + Math.floor(Math.random() * 7);
    const fountainForce = 4;

    for (let i = 0; i < emojiCount; i++) {
      const angle = Math.random() * Math.PI * 2;
      const distance = Math.random() * (continuous ? 0.5 : 1.0);
      const offsetX = Math.cos(angle) * distance;
      const offsetY = Math.sin(angle) * distance;
      const velocityMagnitude = fountainForce * (0.5 + Math.random() * 0.5);
      const velocityAngle = angle + (Math.random() - 0.5) * 0.3;
      const velocityX = Math.cos(velocityAngle) * velocityMagnitude;
      const velocityY = Math.sin(velocityAngle) * velocityMagnitude + Math.random() * 2;
      const delay = continuous ? i * 10 : i * 20;

      setTimeout(() => {
        this.emojiIndex = (this.emojiIndex + 1) % this.emojiChars.length;
        this.createEmoji(x + offsetX, y + offsetY, velocityX, velocityY);
      }, delay);
    }
  }

  startContinuousSpawning() {
    if (this.spawnInterval) return;
    this.spawnInterval = setInterval(() => {
      if (this.isMouseDown) {
        this.createEmojiFountain(this.mouse.x, this.mouse.y, true);
      }
    }, 80);
  }

  stopContinuousSpawning() {
    if (this.spawnInterval) {
      clearInterval(this.spawnInterval);
      this.spawnInterval = null;
    }
  }

  removeOldestEmoji() {
    if (this.emojis.length === 0) return;

    const emojiObj = this.emojis.shift();
    this.world.removeBody(emojiObj.body);
    const emojiType = this.emojiTypes[emojiObj.emojiType];
    const matrix = new THREE.Matrix4();
    matrix.makeScale(0, 0, 0);
    emojiType.instancedMesh.setMatrixAt(emojiObj.instanceIndex, matrix);
    emojiType.instancedMesh.instanceMatrix.needsUpdate = true;

    let typeCount = 0;
    for (let i = 0; i < this.emojis.length; i++) {
      if (this.emojis[i].emojiType === emojiObj.emojiType) {
        this.emojis[i].instanceIndex = typeCount;
        typeCount++;
      }
    }
    emojiType.count = typeCount;
  }

  screenToWorld(screenX, screenY) {
    const rect = this.container.getBoundingClientRect();
    const aspect = this.container.clientWidth / this.container.clientHeight;
    const frustumSize = 20;
    const localX = screenX - rect.left;
    const localY = screenY - rect.top;

    const x = ((localX / this.container.clientWidth) * 2 - 1) * ((frustumSize * aspect) / 2);
    const y = (-(localY / this.container.clientHeight) * 2 + 1) * (frustumSize / 2);
    return { x, y };
  }

  removeEmptyState() {
    if (!this.emptyStateVisible || !this.emptyState) return;
    this.emptyStateVisible = false;

    gsap.to(this.emptyState, {
      opacity: 0,
      scale: 0.95,
      ease: "expo.out",
      duration: 0.65,
      onComplete: () => {
        this.emptyState.remove();
      },
    });
  }

  applyPointerField() {
    if (!this.isPointerInside || this.fieldMode === "off") {
      return;
    }

    const sign = this.fieldMode === "attract" ? 1 : -1;

    for (const emojiObj of this.emojis) {
      const dx = this.mouse.x - emojiObj.body.position.x;
      const dy = this.mouse.y - emojiObj.body.position.y;
      const distanceSq = dx * dx + dy * dy;

      if (distanceSq < 0.08 || distanceSq > this.fieldRadius * this.fieldRadius) {
        continue;
      }

      const distance = Math.sqrt(distanceSq);
      const falloff = 1 - distance / this.fieldRadius;
      const strength = falloff * this.fieldStrength * emojiObj.body.mass * sign;
      const fx = (dx / distance) * strength;
      const fy = (dy / distance) * strength;

      emojiObj.body.applyForce(
        new CANNON.Vec3(fx, fy, 0),
        emojiObj.body.position,
      );
    }
  }

  setupEventListeners() {
    const canvas = this.renderer.domElement;

    const start = (clientX, clientY) => {
      this.removeEmptyState();
      const worldPos = this.screenToWorld(clientX, clientY);
      this.mouse.x = worldPos.x;
      this.mouse.y = worldPos.y;
      this.isPointerInside = true;
      this.isMouseDown = true;
      this.createEmojiFountain(worldPos.x, worldPos.y);
      this.startContinuousSpawning();
    };

    const move = (clientX, clientY) => {
      const worldPos = this.screenToWorld(clientX, clientY);
      this.mouse.x = worldPos.x;
      this.mouse.y = worldPos.y;
      this.isPointerInside = true;
    };

    const end = () => {
      this.isMouseDown = false;
      this.isPointerInside = false;
      this.stopContinuousSpawning();
    };

    canvas.addEventListener("touchstart", (event) => {
      start(event.touches[0].clientX, event.touches[0].clientY);
    });
    canvas.addEventListener("touchmove", (event) => {
      move(event.touches[0].clientX, event.touches[0].clientY);
    });
    canvas.addEventListener("touchend", end);
    canvas.addEventListener("touchleave", end);
    canvas.addEventListener("touchcancel", end);
    canvas.addEventListener("mousedown", (event) => start(event.clientX, event.clientY));
    canvas.addEventListener("mouseup", end);
    canvas.addEventListener("mouseleave", end);
    canvas.addEventListener("mousemove", (event) => move(event.clientX, event.clientY));

    window.addEventListener("resize", () => {
      const aspect = this.container.clientWidth / this.container.clientHeight;
      const frustumSize = 20;
      this.camera.left = (-frustumSize * aspect) / 2;
      this.camera.right = (frustumSize * aspect) / 2;
      this.camera.top = frustumSize / 2;
      this.camera.bottom = -frustumSize / 2;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);
      this.createWalls();
    });
  }

  animate() {
    this.animationId = requestAnimationFrame(this.animate.bind(this));
    this.applyPointerField();
    this.world.step(1 / 60, 0, 6);

    for (const emoji of this.emojiTypeOrder) {
      const emojiType = this.emojiTypes[emoji];
      if (!emojiType) continue;

      const instancedMesh = emojiType.instancedMesh;
      let typeIndex = 0;
      const matrix = new THREE.Matrix4();
      const rotMatrix = new THREE.Matrix4();

      for (let i = 0; i < this.emojis.length; i++) {
        const emojiObj = this.emojis[i];
        if (emojiObj.emojiType !== emoji) continue;

        emojiObj.body.position.z = 0;
        emojiObj.body.velocity.z = 0;
        emojiObj.body.angularVelocity.x = 0;
        emojiObj.body.angularVelocity.y = 0;

        const rotation = emojiObj.body.quaternion.toAxisAngle()[1];
        matrix.makeTranslation(emojiObj.body.position.x, emojiObj.body.position.y, 0);
        rotMatrix.makeRotationZ(rotation);
        matrix.multiply(rotMatrix);
        instancedMesh.setMatrixAt(typeIndex, matrix);
        typeIndex++;
      }

      for (let i = typeIndex; i < this.maxEmojis; i++) {
        const hideMatrix = new THREE.Matrix4();
        hideMatrix.makeScale(0, 0, 0);
        instancedMesh.setMatrixAt(i, hideMatrix);
      }

      if (emojiType.count > 0) {
        instancedMesh.instanceMatrix.needsUpdate = true;
      }
    }

    this.renderer.render(this.scene, this.camera);
  }
}

window.addEventListener("DOMContentLoaded", () => {
  if (typeof THREE === "undefined" || typeof CANNON === "undefined") {
    return;
  }
  new EmojiPhysicsDemo();
});
