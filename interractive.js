var drawBars1 = function(leagues, screen, graph, xScale, yScale)
    {
        d3.select("svg")
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
                     console.log(yScale(pref.Average))
                return screen.height-yScale(pref.Average)  
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
        
        var margins = {left:50,right:200,top:50,bottom:150}
    
    
    
        var graph = 
            {
                width:screen.width-margins.left-margins.right,
                height:screen.height - margins.top-margins.bottom
            }
    
    
        var screen = {width:500, height:500}
        d3.select("svg")
            .attr("width", screen.width)
            .attr("height", screen.height)
        var xScale = d3.scaleBand()
            .domain(["NBA","NHL"])
            .range([0,screen.width])
            .paddingInner(.2)
        var yScale = d3.scaleLinear()
            .domain([0,1])
            .range([screen.height,0]);
        drawBars1(leagues, screen, graph, xScale, yScale);
        drawLabels1(graph, margins);
        drawAxes1(graph,margins,xScale,yScale);

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
        .attr("transform", "translate(18," + (graph.height/2)+") rotate(270) ")
    
    labels.append("text")
        .text("League")
        .classed("label", true)
        .attr("text-anchor", "middle")
        .attr("x", margins.left+(graph.width/2))
        .attr("y", (graph.height))
    
}


var drawAxes1 = function(graph,margins,
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













var drawBars2 = function(leagues, target, xScale, yScale)
    {
        target.selectAll("rect")
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
                     console.log(yScale(pref.Average))
                return screen.height-yScale(pref.Average)  
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
        
        var margins = {left:50,right:200,top:50,bottom:150}
    
    
    
        var graph = 
            {
                width:screen.width-margins.left-margins.right,
                height:screen.height - margins.top-margins.bottom
            }
    
       
    
        var screen = {width:500, height:500}
        d3.select("svg")
            .attr("width", screen.width)
            .attr("height", screen.height)
        
         
        var xScale = d3.scaleBand()
            .domain(["NBA","NHL","NFL"])
            .range([0,screen.width])
            .paddingInner(.2)
        var yScale = d3.scaleLinear()
            .domain([0,1])
            .range([screen.height,0]);
        
        var target = d3.select("svg")
            .append("g")
            .attr("id","#graph")
            .attr("transform",
          "translate("+margins.left+","+
                        margins.top+")");
        
        
        drawBars2(leagues, target, graph, xScale, yScale);
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
        .attr("y", (graph.height))
    
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



var successFCN = function(leagues)
{
    console.log("relative",leagues);
    initGraph2(leagues);
}

var failFCN = function(error)
{
    console.log("error",error);
}

var leaguePromise = d3.csv("relative.csv")

leaguePromise.then(successFCN,failFCN);
        