const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('scene-container').appendChild(renderer.domElement);

const radius = 5;
const images = [
    'https://i.postimg.cc/pmgkcbGj/slide-1.jpg',
    'https://i.postimg.cc/d7r6zHpx/slide-2.jpg',
    'https://i.postimg.cc/k6Cs9NdX/slide-3.jpg',
    'https://i.postimg.cc/7JYNJx6F/slide-4.jpg',
    'https://i.postimg.cc/S2GrKXyL/slide-5.jpg',
    ']https://i.postimg.cc/c6shbcmF/slide-6.jpg',
    'https://i.postimg.cc/pmgkcbGj/slide-1.jpg',
    'https://i.postimg.cc/7JYNJx6F/slide-4.jpg'
];

const textureLoader = new THREE.TextureLoader();
const planes = [];

images.forEach((src, i) => {
    textureLoader.load(src, texture => {
    const material = new THREE.MeshBasicMaterial({ map: texture });
    const geometry = new THREE.PlaneGeometry(2, 3);
    const mesh = new THREE.Mesh(geometry, material);

    const angle = (i / images.length) * Math.PI * 2;
    mesh.position.set(Math.cos(angle) * radius, 0, Math.sin(angle) * radius);
    mesh.lookAt(0, 0, 0);

    scene.add(mesh);
    planes.push(mesh);
    });
});

camera.position.z = 10;

function animate() {
    requestAnimationFrame(animate);
    planes.forEach(plane => {
    plane.rotation.y += 0.002;
    plane.position.applyAxisAngle(new THREE.Vector3(0, 1, 0), 0.002);
    plane.lookAt(0, 0, 0);
    });
    renderer.render(scene, camera);
}

animate();

// Tự động phát nhạc
window.addEventListener('click', () => {
    document.getElementById("birthdayMusic").play();
});
