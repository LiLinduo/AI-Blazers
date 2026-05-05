export type Trail = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  paperIds: string[];
};

export const trails: Trail[] = [
  {
    id: "kaiming-he",
    title: "Kaiming He Trail",
    description: "From initialization and ResNet to Mask R-CNN, MoCo, and MAE.",
    tags: ["CV", "Backbones", "Detection", "SSL"],
    paperIds: [
      "he-init-2015",
      "resnet-2015",
      "identity-mappings-2016",
      "faster-rcnn-2015",
      "fpn-2017",
      "mask-rcnn-2017",
      "group-norm-2018",
      "moco-2020",
      "mae-2021",
    ],
  },
  {
    id: "fei-fei-li",
    title: "Fei-Fei Li Trail",
    description:
      "From ImageNet to visual understanding, scene graphs, and embodied intelligence.",
    tags: ["Datasets", "Vision-Language", "Scene Graphs", "Embodied AI"],
    paperIds: [
      "imagenet-2009",
      "visual-semantic-alignments-2015",
      "visual-genome-2017",
      "scene-graph-generation-2017",
      "image-generation-scene-graphs-2018",
      "embodied-semantic-scene-graph-2022",
    ],
  },
  {
    id: "deepseek",
    title: "DeepSeek Trail",
    description:
      "Open-source LLMs, code models, MoE, mathematical reasoning, RL reasoning, and formal proof.",
    tags: ["LLM", "MoE", "Reasoning", "Formal Math"],
    paperIds: [
      "deepseek-llm-2024",
      "deepseek-coder-2024",
      "deepseekmoe-2024",
      "deepseek-v2-2024",
      "deepseekmath-2024",
      "deepseek-v3-2024",
      "deepseek-r1-2025",
      "deepseek-prover-v2-2025",
    ],
  },
  {
    id: "bytedance-seed",
    title: "ByteDance Seed Trail",
    description:
      "Speech, reasoning LLMs, VLMs, video generation, world models, and diffusion language models.",
    tags: ["Speech", "VLM", "Video", "World Models"],
    paperIds: [
      "seed-tts-2024",
      "seed-thinking-2025",
      "seed-vl-2025",
      "videoworld-2025",
      "seedance-1-2025",
      "omnihuman-1-2025",
      "seed-coder-2025",
      "seed-diffusion-2025",
      "veomni-2025",
      "seedance-2-2026",
    ],
  },
];

export const getTrailById = (id: string) => {
  return trails.find((trail) => trail.id === id);
};