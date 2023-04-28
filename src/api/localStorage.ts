import { RootState } from './../constants/global';
export const saveState = (state: any) => {
        try{
        const serializedData = JSON.stringify({
            ...state
        }); 
        localStorage.setItem('cms', serializedData );
        }catch(err){
            console.log(err);
        }
}


export const loadState = (): RootState | undefined => {
    try{
        const serializedState = localStorage.getItem('cms')
        if(serializedState === null ){
            return undefined;
        }
        const state : RootState = JSON.parse(serializedState)
        return state
    }catch(err){
        console.log(err);
    }
} 









