export type Route = {
  title: string;
  description: string;
  papers: string[];
};

export const routes: Route[] = [
  {
    title: "Road to Large Language Models",
    description:
      "From Seq2Seq and Attention to Transformer, BERT, GPT, scaling laws, instruction tuning, and RLHF.",
    papers: [
      "Seq2Seq",
      "Attention NMT",
      "Transformer",
      "BERT",
      "GPT-1",
      "Scaling Laws",
      "GPT-3",
      "Instruction Tuning",
      "RLHF",
    ],
  },
  {
    title: "From Language Models to Agents",
    description:
      "How language models connect with retrieval, reasoning, acting, decision making, and embodied environments.",
    papers: ["RAG", "ReAct", "Decision Transformer", "Gato", "RT-2"],
  },
  {
    title: "Efficient Adaptation",
    description:
      "Parameter-efficient tuning and compression methods for adapting large models with fewer trainable parameters.",
    papers: ["Distillation", "Adapter", "Prompt Tuning", "LoRA"],
  },
  {
    title: "From CNNs to Vision Transformers",
    description:
      "The visual recognition path from ImageNet and AlexNet to ResNet, detection, segmentation, and ViT.",
    papers: ["AlexNet", "R-CNN", "FCN", "ResNet", "ViT"],
  },
  {
    title: "Self-Supervised Representation Learning",
    description:
      "Learning useful representations without dense human labels, from CPC and SimCLR to DINO and MAE.",
    papers: ["CPC", "SimCLR", "DINO", "MAE"],
  },
  {
    title: "Generative Models",
    description:
      "The evolution of modern generation: VAE, GAN, diffusion models, and latent diffusion.",
    papers: ["VAE", "GAN", "DDPM", "Latent Diffusion"],
  },
  {
    title: "Vision-Language Models",
    description:
      "Connecting images and language through contrastive learning, large-scale alignment, and multimodal generation.",
    papers: ["CLIP", "ALIGN", "DALL·E", "Flamingo"],
  },
  {
    title: "Reinforcement Learning and World Models",
    description:
      "From classic Q-learning to deep RL, latent world models, and sequence modeling for decision making.",
    papers: ["Q-learning", "DQN", "World Models", "Dreamer", "Decision Transformer"],
  },
];