var drawBars1 = function(leagues, target, xScale, yScale1, graph)
    {
        target
            .selectAll("rect")
                .data(leagues)
                .enter()
                .append("rect")
                .attr("x", function(pref)
                    {
            return xScale(pref.League)
        })
                .attr("y", function(pref)
                    {
            return yScale1(pref.Average)
        })
                .attr("width",xScale.bandwidth)
                .attr("height", function(pref)
                        {
                     console.log(yScale1(pref.Average))
                return graph.height-yScale1(pref.Average)  
        })
            
.on("mouseenter" ,function(pref)
    {
        
      var xPos = d3.event.pageX;
      var yPos = d3.event.pageY;
      
        d3.select("#tooltip")
        .classed("hidden",false)
        .style("top",yPos+"px")
        .style("left",xPos+"px")
        
        
        d3.select("#league")
        .text(pref.Average);
      })
    .on("mouseleave",function()
    {
        d3.select("#tooltip")    
        .classed("hidden",true);
        })
    }


var initGraph1 = function(leagues)
    {
        
        var screen = {width:800,height:600}
        
        var margins = {left:50,right:200,top:50,bottom:50}
    
    
    
        var graph = 
            {
                width:screen.width-margins.left-margins.right,
                height:screen.height - margins.top-margins.bottom
            }
    
        var filterLeagues = leagues.filter(function(league)
                {
            if (league.League != "NFL")
                {
                    return true;
                }
            else  
                {return false}
        })
        
        
        console.log(filterLeagues)
        
        
        d3.select("svg")
            .attr("width", screen.width)
            .attr("height", screen.height)
        
         
        var xScale = d3.scaleBand()
            .domain(["NBA","NHL"])
            .range([0,graph.width])
            .paddingInner(.2)
        var yScale1 = d3.scaleLinear()
            .domain([0,.03])
            .range([graph.height,0]);
        
        var target = d3.select("svg")
            .append("g")
            .attr("id","graph")
            .attr("transform",
          "translate("+margins.left+","+
                        margins.top+")");
        
        
        drawBars1(filterLeagues, target, xScale, yScale1, graph);
        drawLabels1(graph, margins);
        drawAxes1(graph,margins,xScale,yScale1);
    }

var drawLabels1 = function(graph, margins)
{
    var labels = d3.select("svg")
        .append("g")
        .classed("labels", true)
        
    labels.append("text")
        .text("Concussions Per Game")
        .classed("title", true)
        .attr("text-anchor", "middle")
        .attr("x", margins.left+(graph.width/2))
        .attr("y", margins.top+(10))
    
    labels.append("text")
        .text("Concussions")
        .classed("label", true)
        .attr("text-anchor", "middle")
        .attr("transform", "translate(12," + (graph.height/2)+") rotate(270) ")
    
    labels.append("text")
        .text("League")
        .classed("label", true)
        .attr("text-anchor", "middle")
        .attr("x", margins.left+(graph.width/2))
        .attr("y", graph.height+margins.top+margins.bottom-(10))
    
}


var drawAxes1 = function(graph,margins,
                         xScale,yScale1)
{

        var xAxis = d3.axisBottom(xScale);
        var yAxis = d3.axisLeft(yScale1);
        
        var axes = d3.select("svg")
            .append("g")
        axes.append("g")
            .attr("transform", "translate("+margins.left+","+(margins.top+graph.height)+")")
            .call(xAxis)
        axes.append("g")
            .attr("transform", "translate("+margins.left+","+(margins.top)+")")
            .call(yAxis)

 
}













var drawBars2 = function(leagues, target, xScale, yScale, graph)
    {
        target
            .selectAll("rect")
                .data(leagues)
                .enter()
                .append("rect")
                .attr("x", function(pref)
                    {
            return xScale(pref.League)
        })
                .attr("y", function(pref)
                    {
            return yScale(pref.Average)
        })
                .attr("width",xScale.bandwidth)
                .attr("height", function(pref)
                        {
                     console.log((pref.Average))
                return graph.height-yScale(pref.Average)  
        })
            
.on("mouseenter" ,function(pref)
    {
        
      var xPos = d3.event.pageX;
      var yPos = d3.event.pageY;
      
        d3.select("#tooltip")
        .classed("hidden",false)
        .style("top",yPos+"px")
        .style("left",xPos+"px")
        
        
        d3.select("#league")
        .text(pref.Average);
      })
    .on("mouseleave",function()
    {
        d3.select("#tooltip")    
        .classed("hidden",true);
        })
    }


var initGraph2 = function(leagues)
    {
        
        
        var screen = {width:800,height:600}
        
        var margins = {left:50,right:200,top:50,bottom:50}
    
    
    
        var graph = 
            {
                width:screen.width-margins.left-margins.right,
                height:screen.height - margins.top-margins.bottom
            }
    
    
        
        d3.select("svg")
            .attr("width", screen.width)
            .attr("height", screen.height)
        
         
        var xScale = d3.scaleBand()
            .domain(["NBA","NHL","NFL"])
            .range([0,graph.width])
            .paddingInner(.2)
        var yScale = d3.scaleLinear()
            .domain([0,1])
            .range([graph.height,0]);
        
        var target = d3.select("svg")
            .append("g")
            .attr("id","graph")
            .attr("transform",
          "translate("+margins.left+","+
                        margins.top+")");
        
        
        drawBars2(leagues, target, xScale, yScale, graph);
        drawLabels2(graph, margins);
        drawAxes2(graph,margins,xScale,yScale);

    }

var drawLabels2 = function(graph, margins)
{
    var labels = d3.select("svg")
        .append("g")
        .classed("labels", true)
        
    labels.append("text")
        .text("Concussions Per Game")
        .classed("title", true)
        .attr("text-anchor", "middle")
        .attr("x", margins.left+(graph.width/2))
        .attr("y", margins.top+(10))
    
    labels.append("text")
        .text("Concussions")
        .classed("label", true)
        .attr("text-anchor", "middle")
        .attr("transform", "translate(18," + (graph.height/2)+") rotate(270) ")
    
    labels.append("text")
        .text("League")
        .classed("label", true)
        .attr("text-anchor", "middle")
        .attr("x", margins.left+(graph.width/2))
        .attr("y", graph.height+margins.top+margins.bottom)
    
}


var drawAxes2 = function(graph,margins,
                         xScale,yScale)
{

        var xAxis = d3.axisBottom(xScale);
        var yAxis = d3.axisLeft(yScale);
        
        var axes = d3.select("svg")
            .append("g")
        axes.append("g")
            .attr("transform", "translate("+margins.left+","+(margins.top+graph.height)+")")
            .call(xAxis)
        axes.append("g")
            .attr("transform", "translate("+margins.left+","+(margins.top)+")")
            .call(yAxis)

 
}


var clickGraph = function(leagues)
    {
        d3.select("#graph")
            .on("click", function()
                {
            d3.selectAll("svg *")
            .remove()
            initGraph2(leagues);
        })
    }


var successFCN = function(leagues)
{
    console.log("relative",leagues);
    initGraph1(leagues);
    clickGraph(leagues);
}

var failFCN = function(error)
{
    console.log("error",error);
}

var leaguePromise = d3.csv("relative.csv")

leaguePromise.then(successFCN,failFCN);
        