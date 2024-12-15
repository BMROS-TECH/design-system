import React from "react";

import type { Preview } from "@storybook/react";
import '../src/index.css'
import { Decorator } from '@storybook/react';

import { Toaster } from '../src/components/ui/toaster'; // Asegúrate de que la ruta sea correcta

const withGlobalToaster: Decorator = (Story) => (
  <div data-fede className="p-4">
    <Story /> {/* Renderiza la story actual */}
    <Toaster /> {/* Renderiza el Toaster globalmente */}
  </div>
);


const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
    decorators: [withGlobalToaster], // Agrega el decorator global
};

export default preview;
