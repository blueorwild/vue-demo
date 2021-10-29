<template>
  <div>
    <div :style="{ minHeight: '30px', background: '#f0f2f5'}">
      <a-breadcrumb>
        <a-breadcrumb-item>antv</a-breadcrumb-item>
        <a-breadcrumb-item>Graph</a-breadcrumb-item>
      </a-breadcrumb>
    </div>
    <div :style="{ margin: '24px', background: '#fff'}">
     <div id="container" :style="{ height: '500px', width: '800px' }"></div>
    </div>
  </div>
</template>
<script>
import G6 from "@antv/g6";

export default {
  data() {
    return {
        nodes: [
            { id: 'node0', size: 50 },
            { id: 'node1', size: 30 },
            { id: 'node2', size: 30 },
            { id: 'node3', size: 30 },
            { id: 'node4', size: 30, isLeaf: true },
            { id: 'node5', size: 30, isLeaf: true },
            { id: 'node6', size: 15, isLeaf: true },
            { id: 'node7', size: 15, isLeaf: true },
            { id: 'node8', size: 15, isLeaf: true },
            { id: 'node9', size: 15, isLeaf: true },
            { id: 'node10', size: 15, isLeaf: true },
            { id: 'node11', size: 15, isLeaf: true },
            { id: 'node12', size: 15, isLeaf: true },
            { id: 'node13', size: 15, isLeaf: true },
            { id: 'node14', size: 15, isLeaf: true },
            { id: 'node15', size: 15, isLeaf: true },
            { id: 'node16', size: 15, isLeaf: true },
        ],
        edges: [
            { source: 'node0', target: 'node1' },
            { source: 'node0', target: 'node2' },
            { source: 'node0', target: 'node3' },
            { source: 'node0', target: 'node4' },
            { source: 'node0', target: 'node5' },
            { source: 'node1', target: 'node6' },
            { source: 'node1', target: 'node7' },
            { source: 'node2', target: 'node8' },
            { source: 'node2', target: 'node9' },
            { source: 'node2', target: 'node10' },
            { source: 'node2', target: 'node11' },
            { source: 'node2', target: 'node12' },
            { source: 'node2', target: 'node13' },
            { source: 'node3', target: 'node14' },
            { source: 'node3', target: 'node15' },
            { source: 'node3', target: 'node16' },
        ]
    };
  },
  mounted() {
    this.showChart();
  },
  methods: {
    //生成树图
    showChart() {
        const container = document.getElementById("container");
        const width = container.clientWidth;
        const height = container.clientHeight;
        const graph = new G6.Graph({
            // 图的DOM 容器，可以传入该 DOM 的 id 或者直接传入容器的 HTML 节点对象。
            container: container,
            width: width,
            height: height,
            // 设置画布的模式 包含default 模式和 edit 模式
            modes: {
                // default 模式中包含点击选中节点行为和拖拽画布行为
                default: ['drag-canvas'],
            },
            // 默认的节点设置
            defaultNode: {
                color: '#5B8FF9',
            },
            layout: {
                type: "force",
                preventOverlap: true,
                linkDistance: (d) => {
                    if (d.source.id === 'node0') {
                        return 100;
                    }
                    return 30;
                },
                nodeStrength: (d) => {
                    if (d.isLeaf) {
                        return -50;
                    }
                    return -10;
                },
                edgeStrength: (d) => {
                    if (d.source.id === 'node1' || d.source.id === 'node2' || d.source.id === 'node3') {
                        return 0.7;
                    }
                    return 0.1;
                },
            },
        });

        // 为不同节点进行不同的配置 必须在 render 之前调用
        graph.data({
            nodes: this.nodes,
            edges: this.edges
            // edges: this.edges.map(function (edge, i) {
            //     edge.id = 'edge' + i;
            //     return Object.assign({}, edge);
            // }),
        });
        //渲染视图
        graph.render();
        //让画布内容适应视口
        // graph.fitView();
        // 拖曳相关
        graph.on('node:dragstart', function (e) {
            graph.layout();
            refreshDragedNodePosition(e);
        });
        graph.on('node:drag', function (e) {
            refreshDragedNodePosition(e);
        });
        graph.on('node:dragend', function (e) {
            e.item.get('model').fx = null;
            e.item.get('model').fy = null;
        });

        if (typeof window !== 'undefined') {
            window.onresize = () => {
            if (!graph || graph.get('destroyed')) return;
            if (!container || !container.scrollWidth || !container.scrollHeight) return;
            graph.changeSize(container.scrollWidth, container.scrollHeight);
            }
        }

        function refreshDragedNodePosition(e) {
            const model = e.item.get('model');
            model.fx = e.x;
            model.fy = e.y;
        }
    },
  },
};
</script>