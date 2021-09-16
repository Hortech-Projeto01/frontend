import React from "react";
import { render, screen, userEvent, waitFor } from "tests/index.test";
import PlantaCreate from ".";

describe("PlantaCreate", () => {
  describe("create planta", () => {
    it("should submit without showing errors", async () => {
      render(<PlantaCreate />);

      const submitButton = screen.getByRole("button", { name: /salvar/i });

      const values = {
        nome: "Macieira",
        num_frutos_colhidos: "200",
        qtd_diaria_agua: "10L",
        qtd_media_sementes: "60",
        nivel_incidencia_solar: "200",
      };
      expect(screen.queryAllByRole("alert").length).toBe(0);

      userEvent.type(screen.getByPlaceholderText("Nome"), values.nome);

      userEvent.type(
        screen.getByPlaceholderText("Nº incidência solar"),
        values.nivel_incidencia_solar
      );

      userEvent.type(
        screen.getByPlaceholderText("Nº de frutos colhidos"),
        values.num_frutos_colhidos
      );

      userEvent.type(
        screen.getByPlaceholderText("Qntd. de água diária"),
        values.qtd_diaria_agua
      );

      userEvent.type(
        screen.getByPlaceholderText("Qntd. média de sementes"),
        values.qtd_media_sementes
      );

      userEvent.click(submitButton);

      await waitFor(() =>
        expect(screen.queryAllByRole("alert").length).toBe(0)
      );
    });

    it("should show errors messages", async () => {
      render(<PlantaCreate />);

      const submitButton = screen.getByRole("button", { name: /salvar/i });

      expect(screen.queryAllByRole("alert").length).toBe(0);

      userEvent.click(submitButton);

      await waitFor(() =>
        expect(screen.queryAllByRole("alert").length).toBe(5)
      );
    });
  });
});
