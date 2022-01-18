import { hideMessage, showMessage} from './index'

describe('Layout Actions', () =>{
	describe('Actions Types', ()=>{
		test('debe retornar Action Type SHOW_MESSAGE',()=>{
			expect(showMessage.type).toEqual('SHOW_MESSAGE');
		} );
		test('debe retornar Action Type HIDE_MESSAGE',()=>{
			expect(hideMessage.type).toEqual('HIDE_MESSAGE');
		} );

	});
	describe('Actions, Creators', ()=> {
		test('debe retornar action creator showMessage { type: SHOW_MESSAGE }', ()=>{
			expect( showMessage()).toEqual({type: 'SHOW_MESSAGE'})
		});
		test('debe retornar action creator hideMessage { type: HIDE_MESSAGE }', ()=>{
			expect(hideMessage()).toEqual({type: 'HIDE_MESSAGE'})
		});

	});
});
