import { createAction, props } from '@ngrx/store';


import { Response } from '../../core/model/Response.interface';

export const retrieveAllArticolos = createAction('[Home] articolos');
export const retrieveAllHot =createAction('[Articolo] hot articolos')
export const updateArticolo =createAction('[Articolo] prod upd',props<{id: string, nome:string, descrizione:string,prezzo:string,genere:string}>());
export const initArticolos = createAction('[Home] init articolos', props<{response: Response}>());
export const initArticolosHot = createAction('[Home] init articolos', props<{response: Response}>());
export const createArticolo= createAction('[Articolo] creazione prodotto', props<{nome:string, descrizione:string,prezzo:string,genere:string}>());
export const deleteArticolo=createAction('[Articolo], delete articolo', props<{id: string}>())
export const findProdById=createAction('[Articolo], find articolo', props<{ids: string}>())
//sbagliato no sbatti altro

//no sbatti
