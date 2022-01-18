import { Types, Creators} from './index'

describe('Layout Actions', () =>{
	describe('Actions Types', ()=>{
		test('debe retornar Action Type SHOW_MESSAGE',()=>{
			expect(Types.SHOW_MESSAGE).toEqual('SHOW_MESSAGE');
		} );
		test('debe retornar Action Type HIDE_MESSAGE',()=>{
			expect(Types.HIDE_MESSAGE).toEqual('HIDE_MESSAGE');
		} );

	});
	describe('Actions, Creators', ()=> {
		test('debe retornar action creator showMessage { type: SHOW_MESSAGE }', ()=>{
			expect( Creators.showMessage()).toEqual({type: Types.SHOW_MESSAGE})
		});
		test('debe retornar action creator hideMessage { type: HIDE_MESSAGE }', ()=>{
			expect(Creators.hideMessage()).toEqual({type: Types.HIDE_MESSAGE})
		});

	});
});
