import {expect, it, beforeAll, afterAll, describe} from 'vitest';
import {render,screen,cleanup} from '@testing-library/react'; 
import Page from './page';

beforeAll(()=>{
    render(<Page/>)
})

describe("Home Page",()=>{
    it("should render title",()=>{
        expect(screen.getByRole("heading")).toBeDefined()
    })
})

afterAll(()=>{
    cleanup()
})