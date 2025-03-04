import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaCode, FaPaintBrush, FaEnvelope } from 'react-icons/fa';
import { ProjectsList } from '../../../core/data/constants';
import { ProjectSummary } from '../../../core/data/schema';
import React from 'react';

const Feature = () => {
  const [hovered, setHovered] = useState(null);

  const projects = ProjectsList;

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8 font-sans" >
      {/* Hero Section */}
      <section className="text-center py-16" >
        // TODO
      </section>

      {/* Projects Section */ }
      <section className="py-16">
        // TODO
      </section>

      {/* Skills Section */}
      <section className="py-16">
        // TODO
      </section>

      {/* Downloads Section */}
      <section className="py-16 text-center">
        // TODO
      </section>
    </div>
  );
};

export default class ComponentWrapper {
  static StyledFeatureComponent = Feature;
}
