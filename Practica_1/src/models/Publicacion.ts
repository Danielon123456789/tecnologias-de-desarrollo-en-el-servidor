import mongoose, { Schema } from "mongoose";

const PublicacionSchema = new Schema({
  titulo: { type: String, required: true },
  contenido: { type: String, required: true },
  fecha: { type: Date, default: Date.now },
  autor: { type: Schema.Types.ObjectId, ref: "users", required: true } // Referencia a "users"
});

export default mongoose.model("Publicacion", PublicacionSchema);