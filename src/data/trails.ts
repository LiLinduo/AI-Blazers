export type Trail = {
  name: string;
  subtitle: string;
  tags: string[];
};

export const trails: Trail[] = [
  {
    name: "Kaiming He Trail",
    subtitle: "From initialization and ResNet to Mask R-CNN, MoCo, and MAE.",
    tags: ["CV", "Backbones", "Detection", "SSL"],
  },
  {
    name: "Fei-Fei Li Trail",
    subtitle:
      "From ImageNet to visual understanding, scene graphs, and embodied intelligence.",
    tags: ["Datasets", "Vision-Language", "Scene Graphs", "Embodied AI"],
  },
  {
    name: "DeepSeek Trail",
    subtitle:
      "Open-source LLMs, code models, MoE, mathematical reasoning, RL reasoning, and formal proof.",
    tags: ["LLM", "MoE", "Reasoning", "Formal Math"],
  },
  {
    name: "ByteDance Seed Trail",
    subtitle:
      "Speech, reasoning LLMs, VLMs, video generation, world models, and diffusion language models.",
    tags: ["Speech", "VLM", "Video", "World Models"],
  },
];