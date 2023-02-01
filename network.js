    // specify the data for the network graph
    function draw() {
        // create some nodes
        var nodes = [
          { id: 0, label: "Blockchain", group: 1 },
          { id: 1, label: "OpenAI", group: 1 },
          { id: 2, label: "Project Development", group: 1 },
          { id: 3, label: "Fairtrade", group: 1 },
          { id: 4, label: "Decentralized", group: 1 },
          { id: 5, label: "Distributed Systems", group: 1 },
          { id: 6, label: "Artificial Intelligence", group: 1 },
          { id: 7, label: "Data Science", group: 1 },
          { id: 8, label: "Machine Learning", group: 1 },
          { id: 9, label: "Cybersecurity", group: 1 },
          { id: 10, label: "Neural Networks", group: 2 },
          { id: 11, label: "Deep Learning", group: 2 },
          { id: 12, label: "Computer Vision", group: 3 },
          { id: 13, label: "Data Management", group: 2 },
          { id: 14, label: "Cloud Computing", group: 2 },
          { id: 15, label: "Big Data", group: 2 },
          { id: 16, label: "Automation", group: 3 },
          { id: 17, label: "Internet of Things", group: 3 },
          { id: 18, label: "Data Storage", group: 3 },
          { id: 19, label: "Data Backup", group: 3 },
          { id: 20, label: "Data Recovery", group: 3 },
          { id: 21, label: "Data Analysis", group: 3 },
          { id: 22, label: "Data Visualization", group: 3 },
          { id: 23, label: "Data Mining", group: 3 },
          { id: 24, label: "Data Management Systems", group: 4 },
          { id: 25, label: "Data Management Tools", group: 4 },
          { id: 26, label: "Data Warehousing", group: 5 },
          { id: 27, label: "Data Engineering", group: 4 },
          { id: 28, label: "Data Architecture", group: 0 },
          { id: 29, label: "Data Modelling", group: 2 },
          { id: 30, label: "Data Quality", group: 3 },
          { id: 31, label: "Data Integration", group: 2 },
          { id: 32, label: "Data Cleansing", group: 2 },
          { id: 33, label: "Data Validation", group: 2 },
          { id: 34, label: "Data Governance", group: 2 },
          { id: 35, label: "Data Security", group: 2 },
          { id: 36, label: "Data Privacy", group: 2 },
          { id: 37, label: "Data Compliance", group: 2 },
          { id: 38, label: "Data Management Strategies", group: 2 },
          { id: 39, label: "Data Management Solutions", group: 4 },
          { id: 40, label: "Data Management Services", group: 6 },
          { id: 41, label: "Data Management Processes", group: 4 },
        ];
        var edges = [];
  
        // specify the options for the network graph
        var options = {};
  
        // create a network graph using vis.js
        var container = document.getElementById("network");
        var data = { nodes: nodes, edges: edges };
        var network = new vis.Network(container, data, options);
      }