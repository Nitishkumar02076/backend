const express=require('express');

const app=express();

app.use(express.json());

app.listen(3500,()=>{
    console.log("server started");
})

let product=[
    {
        "id":1,
        "name":"product1"
    },
    {
        "id":2,
        "name":"product2"
    }
]

//Get

app.get("/product",(req,res)=>{
    res.send({message:"welcome to get route",payload:product});
})

//Get

app.get("/product/:id",(req,res)=>{
    let id=Number(req.params.id);
    let productid=product.find(pro=>pro.id===id);
    if(productid===undefined){
        res.send({message:"invalid id"});
    }
    else{
        res.send({message:"details of the user",payloads:productid});
    }
});

//Post

app.post("/product",(req,res)=>{
    let id=req.body;
    product.push({id});
    res.send({message:"added succesfully"});

})

//Put
app.put("/product",(req,res)=>{
    let modifiedUser=req.body;
    let index=product.findIndex(product=>product.id===modifiedUser.id);
    if(index===-1){
        res.send({message:"user not found"});
    }
    else
    {
        product[index]=modifiedUser;
        res.send({message:"user updated"});
    }
})

//Delete
app.delete("/product/:id",(req,res)=>{
    let urlId=Number(req.params.id);
    let index=product.findIndex(pro=>pro.id===urlId);
    if(index===-1){
        res.send({message:"user not found"});
    }
    else
    {
        product.splice(index,1);
        res.send({message:"succesfully deleted"});
    }
})




