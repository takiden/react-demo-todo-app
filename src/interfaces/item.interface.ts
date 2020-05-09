export type CHECKBOX = 'CHECKBOX';
export type TEXT = 'TEXT';

export interface IItem{
    type: CHECKBOX | TEXT,
    content:string,
    checked?: boolean,
}