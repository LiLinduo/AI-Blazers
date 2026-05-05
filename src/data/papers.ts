export type PaperStatus = "soon" | "ready";

export type Paper = {
  topic: string;
  subtopic: string;
  year: number;
  title: string;
  status: PaperStatus;
  href?: string;
};

export const papers: Paper[] = [
  { topic: "NLP", subtopic: "Seq2Seq", year: 2014, title: "Sequence to Sequence Learning with Neural Networks", status: "ready", href: "/papers/seq2seq-2014/" },
  { topic: "NLP", subtopic: "Attention", year: 2014, title: "Neural Machine Translation by Jointly Learning to Align and Translate", status: "soon" },
  { topic: "NLP", subtopic: "Transformer", year: 2017, title: "Attention Is All You Need", status: "soon" },
  { topic: "NLP", subtopic: "BERT", year: 2018, title: "BERT: Pre-training of Deep Bidirectional Transformers", status: "soon" },
  { topic: "NLP", subtopic: "GPT-1", year: 2018, title: "Improving Language Understanding by Generative Pre-Training", status: "soon" },

  { topic: "LLM", subtopic: "Scaling Laws", year: 2020, title: "Scaling Laws for Neural Language Models", status: "soon" },
  { topic: "LLM", subtopic: "GPT-3", year: 2020, title: "Language Models are Few-Shot Learners", status: "soon" },
  { topic: "LLM", subtopic: "Instruction Tuning", year: 2021, title: "Finetuned Language Models Are Zero-Shot Learners", status: "soon" },
  { topic: "LLM", subtopic: "RLHF", year: 2022, title: "Training Language Models to Follow Instructions with Human Feedback", status: "soon" },

  { topic: "Agent", subtopic: "ReAct", year: 2022, title: "ReAct: Synergizing Reasoning and Acting in Language Models", status: "soon" },

  { topic: "RAG", subtopic: "Retrieval-Augmented Generation", year: 2020, title: "Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks", status: "soon" },

  { topic: "Efficiency", subtopic: "Adapter", year: 2019, title: "Parameter-Efficient Transfer Learning for NLP", status: "soon" },
  { topic: "Efficiency", subtopic: "Prompt Tuning", year: 2021, title: "The Power of Scale for Parameter-Efficient Prompt Tuning", status: "soon" },
  { topic: "Efficiency", subtopic: "LoRA", year: 2021, title: "LoRA: Low-Rank Adaptation of Large Language Models", status: "soon" },

  { topic: "CV", subtopic: "AlexNet", year: 2012, title: "ImageNet Classification with Deep CNNs", status: "soon" },
  { topic: "CV", subtopic: "ResNet", year: 2015, title: "Deep Residual Learning for Image Recognition", status: "soon" },
  { topic: "CV", subtopic: "Object Detection", year: 2014, title: "R-CNN", status: "soon" },
  { topic: "CV", subtopic: "Segmentation", year: 2015, title: "Fully Convolutional Networks", status: "soon" },
  { topic: "CV", subtopic: "Vision Transformer", year: 2020, title: "An Image is Worth 16x16 Words", status: "soon" },

  { topic: "SSL", subtopic: "CPC", year: 2018, title: "Representation Learning with Contrastive Predictive Coding", status: "soon" },
  { topic: "SSL", subtopic: "SimCLR", year: 2020, title: "A Simple Framework for Contrastive Learning", status: "soon" },
  { topic: "SSL", subtopic: "DINO", year: 2021, title: "Emerging Properties in Self-Supervised ViT", status: "soon" },
  { topic: "SSL", subtopic: "MAE", year: 2021, title: "Masked Autoencoders Are Scalable Vision Learners", status: "soon" },

  { topic: "Gen", subtopic: "VAE", year: 2013, title: "Auto-Encoding Variational Bayes", status: "soon" },
  { topic: "Gen", subtopic: "GAN", year: 2014, title: "Generative Adversarial Nets", status: "soon" },
  { topic: "Gen", subtopic: "Diffusion", year: 2020, title: "Denoising Diffusion Probabilistic Models", status: "soon" },
  { topic: "Gen", subtopic: "Latent Diffusion", year: 2022, title: "High-Resolution Image Synthesis with LDM", status: "soon" },

  { topic: "Multimodal", subtopic: "CLIP", year: 2021, title: "Learning Transferable Visual Models From Natural Language Supervision", status: "soon" },
  { topic: "Multimodal", subtopic: "ALIGN", year: 2021, title: "Scaling Up Vision-Language Representation Learning", status: "soon" },
  { topic: "Multimodal", subtopic: "DALL·E", year: 2021, title: "Zero-Shot Text-to-Image Generation", status: "soon" },
  { topic: "Multimodal", subtopic: "Flamingo", year: 2022, title: "Flamingo: a Visual Language Model", status: "soon" },

  { topic: "RL", subtopic: "Q-learning", year: 1989, title: "Learning from Delayed Rewards", status: "soon" },
  { topic: "RL", subtopic: "DQN", year: 2013, title: "Playing Atari with Deep Reinforcement Learning", status: "soon" },

  { topic: "GNN", subtopic: "GCN", year: 2016, title: "Semi-Supervised Classification with GCN", status: "soon" },
  { topic: "GNN", subtopic: "GAT", year: 2018, title: "Graph Attention Networks", status: "soon" },

  { topic: "Compression", subtopic: "Distillation", year: 2015, title: "Distilling the Knowledge in a Neural Network", status: "soon" },

  { topic: "World Model", subtopic: "World Models", year: 2018, title: "World Models", status: "soon" },
  { topic: "World Model", subtopic: "Dreamer", year: 2020, title: "Dreamer: Reinforcement Learning with Latent World Models", status: "soon" },

  { topic: "Decision", subtopic: "Decision Transformer", year: 2021, title: "Decision Transformer", status: "soon" },

  { topic: "Agent", subtopic: "Generalist Agent (Gato)", year: 2022, title: "A Generalist Agent", status: "soon" },

  { topic: "Embodied AI", subtopic: "RT-2", year: 2023, title: "Vision-Language-Action Models", status: "soon" },

  { topic: "Continual Learning", subtopic: "EWC", year: 2017, title: "Overcoming Catastrophic Forgetting", status: "soon" },
  { topic: "Continual Learning", subtopic: "GEM", year: 2017, title: "Gradient Episodic Memory", status: "soon" },
  { topic: "Continual Learning", subtopic: "Survey", year: 2020, title: "Continual Learning: A Comparative Study", status: "soon" },
];