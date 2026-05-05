export type Route = {
  id: string;
  title: string;
  description: string;
  paperIds: string[];
};

export const routes: Route[] = [
  {
    id: "road-to-llm",
    title: "Road to Large Language Models",
    description:
      "From Seq2Seq and Attention to Transformer, BERT, GPT, scaling laws, instruction tuning, and RLHF.",
    paperIds: [
      "seq2seq-2014",
      "attention-nmt-2014",
      "transformer-2017",
      "bert-2018",
      "gpt1-2018",
      "scaling-laws-2020",
      "gpt3-2020",
      "instruction-tuning-2021",
      "rlhf-2022",
    ],
  },
  {
    id: "language-models-to-agents",
    title: "From Language Models to Agents",
    description:
      "How language models connect with retrieval, reasoning, acting, decision making, and embodied environments.",
    paperIds: [
      "rag-2020",
      "react-2022",
      "decision-transformer-2021",
      "gato-2022",
      "rt2-2023",
    ],
  },
  {
    id: "efficient-adaptation",
    title: "Efficient Adaptation",
    description:
      "Parameter-efficient tuning and compression methods for adapting large models with fewer trainable parameters.",
    paperIds: [
      "distillation-2015",
      "adapter-2019",
      "prompt-tuning-2021",
      "lora-2021",
    ],
  },
  {
    id: "cnns-to-vision-transformers",
    title: "From CNNs to Vision Transformers",
    description:
      "The visual recognition path from ImageNet and AlexNet to ResNet, detection, segmentation, and ViT.",
    paperIds: [
      "imagenet-2009",
      "alexnet-2012",
      "rcnn-2014",
      "fcn-2015",
      "resnet-2015",
      "vit-2020",
    ],
  },
  {
    id: "self-supervised-representation-learning",
    title: "Self-Supervised Representation Learning",
    description:
      "Learning useful representations without dense human labels, from CPC and SimCLR to DINO and MAE.",
    paperIds: [
      "cpc-2018",
      "simclr-2020",
      "dino-2021",
      "mae-2021",
    ],
  },
  {
    id: "generative-models",
    title: "Generative Models",
    description:
      "The evolution of modern generation: VAE, GAN, diffusion models, and latent diffusion.",
    paperIds: [
      "vae-2013",
      "gan-2014",
      "ddpm-2020",
      "ldm-2022",
    ],
  },
  {
    id: "vision-language-models",
    title: "Vision-Language Models",
    description:
      "Connecting images and language through contrastive learning, large-scale alignment, and multimodal generation.",
    paperIds: [
      "clip-2021",
      "align-2021",
      "dalle-2021",
      "flamingo-2022",
    ],
  },
  {
    id: "rl-and-world-models",
    title: "Reinforcement Learning and World Models",
    description:
      "From classic Q-learning to deep RL, latent world models, and sequence modeling for decision making.",
    paperIds: [
      "q-learning-1989",
      "dqn-2013",
      "world-models-2018",
      "dreamer-2020",
      "decision-transformer-2021",
    ],
  },
];

export const getRouteById = (id: string) => {
  return routes.find((route) => route.id === id);
};