import React from "react";
import { render, screen } from "@testing-library/react";
//import nombre - componente from "ruta - componente";
import { describe, it, expect } from "vitest";
import App from "./App";
import "@testing-library/jest-dom/vitest";
import { MemoryRouter } from "react-router-dom";
describe("Prueba de la Aplicacion principal", () => {
    it("Prueba ruta inicio", async () => {
        render(
            <MemoryRouter initialEntries={["/"]}>
                <App />
            </MemoryRouter>
        );
        const encabezadoInicio = screen.getByRole("heading", {name: "Inicio", level: 2})
        expect(encabezadoInicio).toBeInTheDocument();
    });
    it("Prueba ruta productos", async () => {
        render(
            <MemoryRouter initialEntries={["/productos"]}>
                <App />
            </MemoryRouter>
        );
        const encabezadoCargando = screen.getByRole("heading", {name: "Cargando....",level: 2})
        expect(encabezadoCargando).toBeInTheDocument();
    });
});