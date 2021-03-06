export let _itemList = [
  { cmd: "let segment = board.create('segment', [p1, p2]);" },
  { cmd: "let circle = board.create('circle', [p1, p2]);" },
  { cmd: "let conic = board.create('conic',[A,B,C,D,E]);" },
  { cmd: "let point = board.create('point', [1.0, 1.0]);" },
];
// copy templates from here https://jsxgraph.uni-bayreuth.de/docs/symbols/Angle.html
let preTemplates = [
  "let angle = board.create('angle', [p1, p2, p3]);",
  "let arc = board.create('arc', [p1, p2, p3]);",
  "let arrow = board.create('arrow', [p1, p2]);",
  "var l1 = board.create('line', [p1, [1.0, 1.0]]);",
  "let arrowparallel = board.create('arrowparallel', [l1, p3]);",
  "let axis = board.create('axis', [[0.0, 1.0], [1.0, 1.3]]);",
  "let bisector = board.create('bisector', [p1, p2, p3]);",
  "let bisectorlines = board.create('bisectorlines', [l1, l2]);",
  "let circle = board.create('circle', [p1, p2]);",
  `var cc1 = board.create('circumcenter', [p1, p2, p3]);`,
  `var cc1 = board.create('circumcircle', [p1, p2, p3]);`,
  `var a = board.create('circumcirclearc', [p1, p2, p3]);`,
  `var a = board.create('circumcirclesector', [p1, p2, p3]);`,
  `var cu = board.create('cardinalspline', [[[-3,0], [-1,2], [0,1], [2,0], [3,1]], 0.5, 'centripetal'], {createPoints: false});`,
  `var a = board.create('sector', [p1, p2, p3]);`,
  `var c = board.create('comb', [[1, 0], [3, 0]]);`,
  "let conic = board.create('conic', [A,B,C,D,E])",
  `let graph = board.create('curve',[(t)=>(t-Math.sin(t)),(t)=>(1-Math.cos(t)),0, 2*Math.PI]);`,
  `var d = board.create('derivative', [cu], {dash: 2});`,
  `var el = board.create('ellipse',[A,B,C]);`,
  `var graph = board.create('functiongraph',[(x)=> (0.5*x*x-2*x), -2, 4]);`,
  `var p2 = board.create('glider', [2.0, 1.5, c1]);`,
  `var  g = board.create('group', p);`,
  `var t = board.create('hatch', [l1, 3]);`,
  `var el = board.create('hyperbola',[A,B,C]);`,
  `var im = board.create('image', ['http://jsxgraph.uni-bayreuth.de/jsxgraph/distrib/images/uccellino.jpg', [-3,-2], [3,3]]);`,
  `var ic1 = board.create('incenter', [p1, p2, p3]);`,
  `var ic1 = board.create('incircle', [p1, p2, p3]);`,
  `var ineq = board.create('inequality', [l]);`,
  `var i1 = board.create('integral', [[-1.0, 4.0], c1]);`,
  `var i = board.create('intersection', [c1, l1, 0]);`,
  `var l1 = board.create('line', [p1, [1.0, 1.0]]);`,
  `loc = board.create('locus', [m1], {strokeColor: 'red'}); `,
  `var a = board.create('minorarc', [p1, p2, p3]);`,
  `var a = board.create('majorsector', [p1, p2, p3]);`,
  `var mp1 = board.create('midpoint', [p1, p2]);`,
  `var mp2 = board.create('midpoint', [l1]);`,
  `var a = board.create('minorsector', [p1, p2, p3]);`,
  `var an2 = board.create('mirrorelement', [an1, mirr]);`,
  `var  a = board.create('nonreflexangle', [p1, p2, p3], {radius: 2});`,
  `var norm1 = board.create('normal', [c1, p2]);`,
  `var pp1 = board.create('orthogonalprojection', [p3, l1]);`,
  `var j = board.create('otherintersection', [c1, l1, i]);`,
  `var el = board.create('parabola',[C,l]);`,
  `var pl1 = board.create('parallel', [l1, p3]);`,
  `var pp1 = board.create('parallelpoint', [p1, p2, p3]);`,
  `var pp1 = board.create('perpendicularpoint', [p3, l1]);`,
  `var perp1 = board.create('perpendicularsegment', [l1, p3]);`,
  `var l1 = board.create('polarline', [c1, p6]);`,
  `var p8 = board.create('polepoint', [c1, l1]);`,
  `var pol = board.create('polygon', [p1, p2, p3, p4]);`,
  `var r1 = board.create('radicalaxis', [c1, c2]);`,
  `var rp1 = board.create('reflection', [p3, l1]);`,
  `var a = board.create('reflexangle', [p1, p2, p3], {radius: 2});`,
  `var r = board.create('riemannsum',
              [f, function(){return s.Value();}, 'upper', -2, 5],
              {fillOpacity:0.4}
              );`,
  `var a = board.create('semicircle', [p1, p2]);`,
  `var s = board.create('slider', [[1, 2], [3, 2], [1, 5, 10]]);`,
  `var  st = board.create('slopetriangle', [t]);`,
  `var curve = board.create('stepfunction', [[0,1,2,3,4,5], [1,3,0,2,2,1]]);`,
  `var t1 = board.create('tangent', [g1]);`,
  `var tape = board.create('tapemeasure', [[1, 2], [4, 2]], {name:'dist'});`,
  `var t1 = board.create('text',[0,1,"Hello World"]);`,
  `var t = board.create('ticks', [l1], {ticksDistance: 2});`,
  `var curve = board.create('tracecurve', [g1, p2]);`,
  "let polyline = board.create('polyline', [p1, p2])",
];
// generate needed format
export let templates = Array.from(
  preTemplates.map((e) => [e.split("(")[1].split(",")[0].slice(1, -1), e])
);
export let textareaContent =
  "let board = JXG.JSXGraph.initBoard('jxgbox', {boundingbox: [-20, 10, 20, -10], axis:true, keepaspectratio:true});\n";
