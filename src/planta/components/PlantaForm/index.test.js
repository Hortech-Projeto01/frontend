import React from "react";
import { render, screen, userEvent, waitFor } from "tests/index.test";
import PlantaForm from ".";
import * as yup from "yup";

describe("PlantaForm", () => {
  describe("create planta", () => {
    const initialValues = {};
    const validationSchema = yup.object().shape({});

    it("should submit the correct values", async () => {
      const handleSubmit = jest.fn((v) => Promise.resolve(v));
      render(
        <PlantaForm
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        />
      );

      let values = {
        nome: "Macieira",
        infos_por_estacao: "Informação",
      };
      let submitButton = screen.getByRole("button", { name: /salvar/i });

      userEvent.type(screen.getByPlaceholderText("Nome"), values.nome);

      userEvent.type(
        screen.getByPlaceholderText("Informação por estação"),
        values.infos_por_estacao
      );

      userEvent.click(submitButton);

      await waitFor(() => expect(handleSubmit).toHaveBeenCalledWith(values));
    });
  });
});
