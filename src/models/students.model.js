const { Schema, model } = require("mongoose");
const studentsSchema = new Schema(
    {
      carnet: {
        type: String,
        required: true,
      },
      Nombre: {
        type: String,
        required: true,
      },
      Carrera: {
        type: String,
        required: true,
      },
      Notas: {
        type: Number,
        required: true,
      },
      
    },
    {
      timestamps: true,
    }
  );
  module.exports = model("Students", studentsSchema);