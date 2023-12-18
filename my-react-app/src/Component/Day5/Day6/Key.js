export default function Key()
{
    const animals=["dog","cat","lion","tiger"]
    const result =animals.map((ani)=><li>{ani}</li>)
    return(
        <div>
            
                {result}
        </div>
    )
}