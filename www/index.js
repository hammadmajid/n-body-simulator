import init, {Vector3} from "../pkg/nbs.js";

const WIDTH = 512;
const HEIGHT = 512;
const FPS = 60;
const BACKGROUND = "#101010";
const FOREGROUND = "#ff7d0b";

const canvas = document.getElementById("canvas");
canvas.width = WIDTH;
canvas.height = HEIGHT;
const canvasCtx = canvas.getContext("2d");

let angle = 0;
const dz = 1;


function clear() {
    canvasCtx.fillStyle = BACKGROUND;
    canvasCtx.fillRect(0, 0, WIDTH, HEIGHT);
}

function line(p1, p2) {
    canvasCtx.lineWidth = 3;
    canvasCtx.strokeStyle = FOREGROUND
    canvasCtx.beginPath();
    canvasCtx.moveTo(p1.x, p1.y);
    canvasCtx.lineTo(p2.x, p2.y);
    canvasCtx.stroke();
}

function screen(p) {
    // -1..1 => 0..2 => 0..1 => 0..w
    return {
        x: (p.x + 1) / 2 * WIDTH,
        y: (1 - (p.y + 1) / 2) * HEIGHT,
    }
}

let cube_vertices;
let cube_faces;

function draw() {
    const dt = 1 / FPS;
    angle += Math.PI * dt;
    clear();

    for (const face of cube_faces) {
        for (let i = 0; i < face.length; ++i) {
            const a = cube_vertices[face[i]];
            const b = cube_vertices[face[(i + 1) % face.length]];
            line(
                screen(a.rotate_xz(angle).translate_z(dz).project_to_2d()),
                screen(b.rotate_xz(angle).translate_z(dz).project_to_2d())
            )
        }
    }

    setTimeout(draw, 1000 / FPS);
}

async function main() {
    await init();

    cube_vertices = [
        Vector3.new(0.25, 0.25, 0.25),
        Vector3.new(-0.25, 0.25, 0.25),
        Vector3.new(-0.25, -0.25, 0.25),
        Vector3.new(0.25, -0.25, 0.25),

        Vector3.new(0.25, 0.25, -0.25),
        Vector3.new(-0.25, 0.25, -0.25),
        Vector3.new(-0.25, -0.25, -0.25),
        Vector3.new(0.25, -0.25, -0.25),
    ];

    cube_faces = [
        [0, 1, 2, 3],
        [4, 5, 6, 7],
        [0, 4],
        [1, 5],
        [2, 6],
        [3, 7],
    ]

    setTimeout(draw, 1000 / FPS);
}

main().then();

