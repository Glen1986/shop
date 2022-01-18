import reducer from "./index"

describe('Layout Reducer', ()=>{
	test('debe retornar initial state', ()=>{
		expect(reducer(undefined, {})).toEqual({showMessage: false})
	});
	test('debe retornar stata con prop showMessage:true', ()=>{
		expect(reducer(undefined, { type: 'SHOW_MESSAGE' })).toEqual({showMessage: true})
	});
	test('debe retornar stata con prop showMessage:false', ()=>{

		expect(reducer({showMessage: true}, { type: 'HIDE_MESSAGE' })).toEqual({showMessage: false})
	});
});
