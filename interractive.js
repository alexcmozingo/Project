var drawBars1 = function(leagues, target, xScale, yScale1, graph)
    {
        target
            .selectAll("rect")
                .data(leagues)
                .enter()
                .append("rect")
                .attr("id", function(pref)
                        {
                    return pref.League
        })
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
                .attr("id", function(pref)
                        {
                    return pref.League
        })
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
    
    
        
        d3.select("#firstGraph")
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
        .attr("y", graph.height+margins.top+margins.bottom-(10))
    
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



























var drawBars3 = function(actions, target2, xScale, yScale3, graph)
    {
        target2
            .selectAll("rect")
                .data(actions)
                .enter()
                .append("rect")
                .attr("id", function(pref)
                        {
                    return pref.Action
        })
                .attr("x", function(pref)
                    {
            return xScale(pref.Action)
        })
                .attr("y", function(pref)
                    {
            return yScale3(pref.Concussions)
        })
                .attr("width",xScale.bandwidth)
                .attr("height", function(pref)
                        {
                return graph.height-yScale3(pref.Concussions)  
        })
            
.on("mouseenter",function(pref)
    {
      var xPos = d3.event.pageX;
      var yPos = d3.event.pageY;
      
        d3.select("#tooltip")
        .classed("hidden",false)
        .style("top",yPos+"px")
        .style("left",xPos+"px")
        
        
        d3.select("#league")
        .text(pref.Concussions);
      })
    .on("mouseleave",function()
    {
        d3.select("#tooltip")    
        .classed("hidden",true);
        })
    }

var initGraph3 = function(actions)
    {
        
        var screen = {width:800,height:600}
        
        var margins = {left:50,right:200,top:50,bottom:50}
    
    
    
        var graph = 
            {
                width:screen.width-margins.left-margins.right,
                height:screen.height - margins.top-margins.bottom
            }
        
        
        d3.select("#secondGraph")
            .attr("width", screen.width)
            .attr("height", screen.height)
        
         
        var xScale = d3.scaleBand()
            .domain(["Tackling", "Tackled", "Blocking", "Blocked"])
            .range([0,graph.width])
            .paddingInner(.2)
        var yScale3 = d3.scaleLinear()
            .domain([0,500])
            .range([graph.height,0]);
        
        var target2 = d3.select("#secondGraph")
            .append("g")
            .attr("transform",
          "translate("+margins.left+","+
                        margins.top+")");
        
        drawBars3(actions, target2, xScale, yScale3, graph);
        drawLabels3(graph, margins);
        drawAxes3(graph,margins,xScale,yScale3);
    }

var drawLabels3 = function(graph, margins)
{
    var labels = d3.select("#secondGraph")
        .append("g")
        .classed("labels", true)
        
    labels.append("text")
        .text("Concussions by Action")
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
        .text("Action")
        .classed("label", true)
        .attr("text-anchor", "middle")
        .attr("x", margins.left+(graph.width/2))
        .attr("y", graph.height+margins.top+margins.bottom-(10))
    
}


var drawAxes3 = function(graph,margins,
                         xScale,yScale3)
{

        var xAxis = d3.axisBottom(xScale);
        var yAxis = d3.axisLeft(yScale3);
        
        var axes = d3.select("#secondGraph")
            .append("g")
        axes.append("g")
            .attr("transform", "translate("+margins.left+","+(margins.top+graph.height)+")")
            .call(xAxis)
        axes.append("g")
            .attr("transform", "translate("+margins.left+","+(margins.top)+")")
            .call(yAxis)

 
}


















var drawBars4 = function(added, target2, xScale, yScale4, graph)
    {
        target2
            .selectAll("rect")
                .data(added)
                .enter()
                .append("rect")
                .attr("id", function(pref)
                        {
                    return pref.Action
        })
                .attr("x", function(pref)
                    {
            return xScale(pref.Action)
        })
                .attr("y", function(pref)
                    {
            return yScale4(pref.Concussions)
        })
                .attr("width",xScale.bandwidth)
                .attr("height", function(pref)
                        {
                return graph.height-yScale4(pref.Concussions)  
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
        .text(pref.Concussions);
      })
    .on("mouseleave",function()
    {
        d3.select("#tooltip")    
        .classed("hidden",true);
        })
    }


var initGraph4 = function(added)
    {
        
        
        var screen = {width:800,height:600}
        
        var margins = {left:50,right:200,top:50,bottom:50}
    
    
    
        var graph = 
            {
                width:screen.width-margins.left-margins.right,
                height:screen.height - margins.top-margins.bottom
            }
    
    
        
        d3.select("#secondGraph")
            .attr("width", screen.width)
            .attr("height", screen.height)
        
         
        var xScale = d3.scaleBand()
            .domain(["Tackles", "Blocks"])
            .range([0,graph.width])
            .paddingInner(.2)
        var yScale4 = d3.scaleLinear()
            .domain([0,1000])
            .range([graph.height,0]);
        
         var target2 = d3.select("#secondGraph")
            .append("g")
            .attr("transform",
          "translate("+margins.left+","+
                        margins.top+")");
        
        
        drawBars4(added, target2, xScale, yScale4, graph);
        drawLabels4(graph, margins);
        drawAxes4(graph,margins,xScale,yScale4);

    }

var drawLabels4 = function(graph, margins)
{
    var labels = d3.select("#secondGraph")
        .append("g")
        .classed("labels", true)
        
    labels.append("text")
        .text("Concussions by Action")
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
        .text("Action")
        .classed("label", true)
        .attr("text-anchor", "middle")
        .attr("x", margins.left+(graph.width/2))
        .attr("y", graph.height+margins.top+margins.bottom-(10))
    
}


var drawAxes4 = function(graph,margins,
                         xScale,yScale4)
{

        var xAxis = d3.axisBottom(xScale);
        var yAxis = d3.axisLeft(yScale4);
        
        var axes = d3.select("#secondGraph")
            .append("g")
        axes.append("g")
            .attr("transform", "translate("+margins.left+","+(margins.top+graph.height)+")")
            .call(xAxis)
        axes.append("g")
            .attr("transform", "translate("+margins.left+","+(margins.top)+")")
            .call(yAxis)

 
}














var drawBars5 = function(contacts, target3, xScale, yScale5, graph)
    {
        target3
            .selectAll("rect")
                .data(contacts)
                .enter()
                .append("rect")
                .attr("id", "contacts")
                .attr("x", function(pref)
                    {
            return xScale(pref.Part)
        })
                .attr("y", function(pref)
                    {
            return yScale5(pref.Percentage)
        })
                .attr("width",xScale.bandwidth)
                .attr("height", function(pref)
                        {
                return graph.height-yScale5(pref.Percentage)  
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
        .text(pref.Percentage);
        })
    .on("mouseleave",function()
    {
        d3.select("#tooltip")    
        .classed("hidden",true);
        })
    }


var initGraph5 = function(contacts)
    {
        
        
        var screen = {width:800,height:600}
        
        var margins = {left:50,right:200,top:50,bottom:50}
    
    
    
        var graph = 
            {
                width:screen.width-margins.left-margins.right,
                height:screen.height - margins.top-margins.bottom
            }
    
    
        
        d3.select("#thirdGraph")
            .attr("width", screen.width)
            .attr("height", screen.height)
        
         
        var xScale = d3.scaleBand()
            .domain(["Helmet", "Shoulder", "Forearm/Elbow", "Knee", "Thigh", "Foot", "Playing Surface", "Unknown"])
            .range([0,graph.width])
            .paddingInner(.2)
        var yScale5 = d3.scaleLinear()
            .domain([0,1])
            .range([graph.height,0]);
        
         var target3 = d3.select("#thirdGraph")
            .append("g")
            .attr("transform",
          "translate("+margins.left+","+
                        margins.top+")");
        
        
        drawBars5(contacts, target3, xScale, yScale5, graph);
        drawLabels5(graph, margins);
        drawAxes5(graph,margins,xScale,yScale5);

    }

var drawLabels5 = function(graph, margins)
{
    var labels = d3.select("#thirdGraph")
        .append("g")
        .classed("labels", true)
        
    labels.append("text")
        .text("Body Part that Caused the Concussion")
        .classed("title", true)
        .attr("text-anchor", "middle")
        .attr("x", margins.left+(graph.width/2))
        .attr("y", margins.top+(10))
    
    labels.append("text")
        .text("Percentage")
        .classed("label", true)
        .attr("text-anchor", "middle")
        .attr("transform", "translate(18," + (graph.height/2)+") rotate(270) ")
    
    labels.append("text")
        .text("Body Part")
        .classed("label", true)
        .attr("text-anchor", "middle")
        .attr("x", margins.left+(graph.width/2))
        .attr("y", graph.height+margins.top+margins.bottom-(10))
    
}


var drawAxes5 = function(graph,margins,
                         xScale,yScale5)
{

        var xAxis = d3.axisBottom(xScale);
        var yAxis = d3.axisLeft(yScale5);
        
        var axes = d3.select("#thirdGraph")
            .append("g")
        axes.append("g")
            .attr("transform", "translate("+margins.left+","+(margins.top+graph.height)+")")
            .call(xAxis)
        axes.append("g")
            .attr("transform", "translate("+margins.left+","+(margins.top)+")")
            .call(yAxis)

 
}



var clickGraph1 = function(leagues)
    {
        d3.select("#firstGraph")
            .on("click", function()
                {
            d3.selectAll("#firstGraph *")
            .remove()
            d3.select("body")
            .selectAll("#ins1")
            .remove()
            initGraph2(leagues)
        })
    }

var clickGraph2 = function(added)
    {
        d3.select("#secondGraph")
            .on("click", function()
                {
            d3.selectAll("#secondGraph *")
            .remove()
            d3.select("body")
            .selectAll("#ins2")
            .remove()
            initGraph4(added)
        })
    }


var successFCN = function(data)
{
    console.log("data",data);
    var leagues = data[0];
    var actions = data[1];
    var added = data[2];
    var contacts = data[3];
    
    initGraph1(leagues);
    clickGraph1(leagues);
    initGraph3(actions);
    clickGraph2(added);
    initGraph5(contacts);
}

var failFCN = function(error)
{
    console.log("error",error);
}

var leaguePromise = d3.csv("relative.csv")
var actionsPromise = d3.csv("actions.csv")
var addedPromise = d3.csv("added.csv")
var contactsPromise = d3.csv("contacts.csv")

var promises = [leaguePromise, actionsPromise, addedPromise, contactsPromise]

Promise.all(promises)
.then(successFCN, failFCN);
        