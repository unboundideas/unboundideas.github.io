function draw() {
    // create some nodes
    var nodes = [
        {
            id: 100,
            label: "Open",
            group: 1,
            size: 100,
            fixed: true,
            shape: "text",
            size: 102,
            font: {
                size: 92,
                color: '#000000'
            }
        },
        { id: 1, label: "Open Data", group: 1 },
        { id: 2, label: "Open Access", group: 1 },
        { id: 3, label: "Open Standards", group: 1 },
        { id: 4, label: "Open Innovation", group: 1 },
        { id: 5, label: "Open Science", group: 1 },
        { id: 6, label: "Open Culture", group: 1 },
        { id: 7, label: "Open Education", group: 1 },
        { id: 8, label: "Open Government", group: 1 },
        { id: 9, label: "Open Business", group: 1 },
        { id: 10, label: "Open Society", group: 2 },
        { id: 11, label: "Open Technology", group: 2 },
        { id: 12, label: "Open Content", group: 3 },
        { id: 13, label: "Open Infrastructure", group: 2 },
        { id: 14, label: "Open Knowledge", group: 2 },
        { id: 15, label: "Open Software", group: 2 },
        { id: 16, label: "Open Standards", group: 3 },
        { id: 17, label: "Open Collaboration", group: 3 },
        { id: 18, label: "Open Design", group: 3 },
        { id: 19, label: "Open Platforms", group: 3 },
        { id: 20, label: "Open Hardware", group: 3 },
        { id: 21, label: "Open Web", group: 3 },
        { id: 22, label: "Open Data", group: 3 },
        { id: 23, label: "Open Licensing", group: 3 },
        { id: 24, label: "Open API", group: 4 },
        { id: 25, label: "Open Communications", group: 4 },
        { id: 26, label: "Open Format", group: 5 },
        { id: 27, label: "Open Geospatial", group: 4 },
        { id: 28, label: "Open Mindset", group: 0 },
        { id: 29, label: "Open Network", group: 2 },
        { id: 30, label: "Open Product", group: 3 },
        { id: 31, label: "Open Source Software", group: 2 },
        { id: 32, label: "Open Community", group: 2 },
        { id: 33, label: "Open Minds", group: 2 },
        { id: 34, label: "Open Knowledge Management", group: 2 },
        { id: 35, label: "Open Innovation Management", group: 2 },
        { id: 36, label: "Open Business Models", group: 2 },
        { id: 37, label: "Open Collaboration Platforms", group: 2 },
        { id: 38, label: "Open Value Networks", group: 2 },
        { id: 39, label: "Open Digital Transformation", group: 4 },
        { id: 40, label: "Open Solutions", group: 6 },
        { id: 41, label: "Open Services", group: 4 },
        { id: 42, label: "Open Business Ecosystems", group: 4 },
        { id: 43, label: "Open Collaborative Economy", group: 5 },
        { id: 44, label: "Open Leadership", group: 5 },
        { id: 45, label: "Open Supply Chains", group: 5 },
        { id: 46, label: "Open Innovation Networks", group: 5 },
        { id: 47, label: "Open Human Resources", group: 5 },
        { id: 48, label: "Open Talent Management", group: 5 },
        { id: 49, label: "Open Talent Development", group: 5 },
        { id: 50, label: "Open Diversity & Inclusion", group: 5 },
        { id: 51, label: "Open Talent Acquisition", group: 5 },
        { id: 52, label: "Open Workforce Development", group: 5 },
        { id: 53, label: "Open Learning & Development", group: 5 },
        { id: 54, label: "Open Organizational Culture", group: 5 },
        { id: 55, label: "Open Organizational Structure", group: 5 },
        { id: 56, label: "Open Organizational Design", group: 5 },
        { id: 57, label: "Open Organizational Development", group: 5 },
        { id: 58, label: "Open Organizational Transformation", group: 5 },
        { id: 59, label: "Open Decision Making", group: 5 },
        { id: 60, label: "Open Decision Support", group: 5 },
        { id: 61, label: "Open Decision Science", group: 5 },
        { id: 62, label: "Open Business Processes", group: 4 },
        { id: 63, label: "Open Business Strategies", group: 4 },
        { id: 64, label: "Open Work Practices", group: 4 },
        { id: 65, label: "Open Employee Engagement", group: 4 },
        { id: 66, label: "Open Talent Management", group: 4 },
        { id: 67, label: "Open Organizational Design", group: 4 },
        { id: 68, label: "Open Leadership", group: 4 },
        { id: 69, label: "Open Decision Making", group: 4 },
        { id: 70, label: "Open Communication Channels", group: 4 },
        { id: 71, label: "Open Customer Relationships", group: 4 },
        { id: 72, label: "Open Customer Feedback", group: 4 },
        { id: 73, label: "Open Customer Experience", group: 4 },
        { id: 74, label: "Open Customer Insights", group: 4 },
        { id: 75, label: "Open Customer Engagement", group: 4 }
    ];

    var edges = nodes.map(function (node, index) {
        return { from: node.id, to: 100 };
    });

    // create a network
    var container = document.getElementById("mynetwork");
    container.style.clientWidth = '100%';
    container.style.clientHeight = '100%';
    var data = {
        nodes: nodes,
        edges: edges,
    };
    // nodes[100].size = 62;
    var options = {
        // width: "100%",
        // height: "100%",
        autoResize: true,
        nodes: {
            shape: "text",
            size: 42,
            font: {
                size: 42,
                color: '#000000'
            }
        },
        physics: {
            forceAtlas2Based: {
                gravitationalConstant: -50,
                centralGravity: -0.0005,
                springLength: 800,
                springConstant: 0.18,
                avoidOverlap: 0.5
            },

            repulsion: {
                springLength: 200,
            },
            maxVelocity: 25,
            solver: "forceAtlas2Based",
            timestep: 0.35,
            stabilization: { iterations: 150 },
        },
    };
    var network = new vis.Network(container, data, options);

}

window.addEventListener("load", () => {
    draw();
});
