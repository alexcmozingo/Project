var successFCN = function(leagues)
{
    console.log("comparison",leagues);
}

var failFCN = function(error)
{
    console.log("error",error);
}

var polPromise = d3.csv("comparison.csv")
polPromise.then(successFCN,failFCN);