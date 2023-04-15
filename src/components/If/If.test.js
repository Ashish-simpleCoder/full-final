var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import * as React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import If from './If';
const Dummy = React.lazy(() => import('../../DummyComponents/Dummy'));
describe('If.tsx', () => {
    it('should render without any errors or crash', () => {
        render(React.createElement(If, { condition: true },
            React.createElement("div", { "data-testid": "element" }, "element")));
    });
    it('should work without condition prop', () => {
        render(React.createElement(If, null,
            React.createElement("div", { "data-testid": "element" }, "element")));
    });
    it('should return null if condition evaluates to falsy value', () => {
        render(React.createElement(If, { condition: false },
            React.createElement("div", { "data-testid": "element" }, "element")));
        expect(screen.queryByTestId('element')).not.toBeInTheDocument();
    });
    it('should render normally if no children is passed', () => {
        render(React.createElement(If, { condition: false }));
    });
    it('should render children if the condition ievaluates to truthy vale and only one child is passed', () => {
        render(React.createElement(If, { condition: true },
            React.createElement("div", { "data-testid": "element" }, "element")));
        expect(screen.queryByTestId('element')).toBeInTheDocument();
    });
    it('should render fist children if condition evaluates to truthy value and multiple children are passed', () => {
        render(React.createElement(If, { condition: 2 + 2 > 3 },
            React.createElement("div", { "data-testid": "element" }, "element"),
            React.createElement("div", { "data-testid": "second-children" }, "second children")));
        expect(screen.queryByTestId('element')).toBeInTheDocument();
        expect(screen.queryByTestId('second-children')).not.toBeInTheDocument();
    });
    it('should render second children if condition evaluates to falsy value and multiple children are passed', () => {
        render(React.createElement(If, { condition: false },
            React.createElement("div", { "data-testid": "element" }, "element"),
            React.createElement("div", { "data-testid": "second-children" }, "second children")));
        expect(screen.queryByTestId('element')).not.toBeInTheDocument();
        expect(screen.queryByTestId('second-children')).toBeInTheDocument();
    });
    it('should render all of the children after zero index when condition evaluates to false', () => {
        render(React.createElement(If, { condition: false },
            React.createElement("div", { "data-testid": "element" }, "element"),
            React.createElement("div", { "data-testid": "second-children" }, "second children"),
            React.createElement("div", { "data-testid": "third-children" }, "third children")));
        expect(screen.getByTestId('second-children')).toBeInTheDocument();
        expect(screen.getByTestId('third-children')).toBeInTheDocument();
    });
    it('should return element in suspense if suspense is true and condition evaluates to truthy value', () => {
        render(React.createElement(If, { condition: true, suspense: true },
            React.createElement("div", { "data-testid": "element" }, "mango")));
        expect(screen.queryByTestId('element')).toBeInTheDocument();
    });
    it('should return element in suspense if suspense iffs true and condition evaluates to truthy value', () => __awaiter(void 0, void 0, void 0, function* () {
        render(React.createElement(If, { condition: true, suspense: true, fallback: React.createElement("h1", { "data-testid": "fallback" }, "loading....") },
            React.createElement(Dummy, null)));
        expect(screen.queryByTestId('fallback')).toBeInTheDocument();
        yield waitFor(() => {
            expect(screen.queryByTestId('dummy-1')).toBeInTheDocument();
        });
    }));
    it('should return first-children in suspense if suspense is true and children is multiple', () => {
        render(React.createElement(If, { condition: true, suspense: true },
            React.createElement("div", { "data-testid": "element" }, "mango"),
            React.createElement("div", { "data-testid": "second-children" }, "second children")));
        expect(screen.queryByTestId('element')).toBeInTheDocument();
    });
});
