export function Input( props ) {
    return (
        <div>
            <label {...props}></label>
            <input className="border-2 border-zinc500" {...props}/>
        </div>
    )    
}