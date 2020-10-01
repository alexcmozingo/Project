var successFCN = function(actions)
{
    console.log("actions",actions);
    initGraph(actions);
}

var failFCN = function(error)
{
    console.log("error",error);
}

var leaguePromise = d3.csv("actions.csv")

leaguePromise.then(successFCN,failFCN);