import React from 'react'; // Importante si no da error
import { render, screen } from '@testing-library/react';
import Inicio from './Inicio';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom/vitest';

describe("Prueba de renderizado componente Inicio", () => {
    render(<Inicio />);
    it("Prueba de desplegaddo texto Producto", ()=>{
        const texto = screen.getByText(/Producto/);
        expect(texto).toBeInTheDocument();
    })
});
