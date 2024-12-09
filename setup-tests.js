import { cleanup } from '@testing-library/react';
import { afterEach, beforeAll } from 'vitest';
import '@testing-library/jest-dom/vitest';
import { server } from './src/mocks/server';

beforeAll(() => server.listen());

afterEach(() => {
  cleanup();
});

afterAll(() => server.close());
