use wasm_bindgen::prelude::wasm_bindgen;

#[wasm_bindgen]
pub struct Vector2 {
    pub x: f64,
    pub y: f64,
}
#[wasm_bindgen]
#[derive(Copy, Clone)]
pub struct Vector3 {
    pub x: f64,
    pub y: f64,
    pub z: f64,
}

#[wasm_bindgen]
impl Vector2 {
    pub fn new(x: f64, y: f64) -> Vector2 {
        Vector2 { x, y }
    }
}

#[wasm_bindgen]
impl Vector3 {
    pub fn new(x: f64, y: f64, z: f64) -> Vector3 {
        Vector3 { x, y, z }
    }

    pub fn project_to_2d(&self) -> Vector2 {
        Vector2 {
            x: self.x / self.z,
            y: self.y / self.z,
        }
    }

    pub fn translate_z(&self, dz: f64) -> Vector3 {
        Vector3 {
            x: self.x,
            y: self.y,
            z: self.z + dz,
        }
    }

    pub fn rotate_xz(&self, theta: f64) -> Vector3 {
        let c = theta.cos();
        let s = theta.sin();
        Vector3 {
            x: self.x * c - self.z * s,
            y: self.y,
            z: self.x * s + self.z * c,
        }
    }
}