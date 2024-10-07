export const health = {
    path : "/health",
    method: "get",
    handler: (req,res)=> {
        res.json({
            status : "OK",
            msg : "Server health is Good"
        })
    }
}

export const health2 = {
    path : "/health2",
    method: "get",
    handler: (req,res)=> {
        res.json({
            status : "OK2",
            msg : "Server health is Good2"
        })
    }
}