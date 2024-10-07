export const helloroute = {
    path: '/hello',
    method: 'get',
    handler: (req,res) =>{
        res.status(200).json({message: 'hello from express'});    
    }
}