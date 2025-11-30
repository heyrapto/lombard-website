'use client';

import { useState } from 'react';

interface CheckboxOption {
  id: string;
  label: string;
  description: string;
}

const ContactForm = () => {
  const [email, setEmail] = useState('');
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [optIn, setOptIn] = useState(false);

  const checkboxOptions: CheckboxOption[] = [
    {
      id: 'speak-to-team',
      label: 'Speak to the team',
      description: "Check this box if you'd like to explore opportunities with a Lombard team member"
    },
    {
      id: 'build-with-lombard',
      label: 'Build with Lombard',
      description: 'Check this box to collaborate and build with Lombard'
    },
    {
      id: 'join-email-list',
      label: 'Join email list',
      description: 'Check this box to receive regular updates from Lombard, straight to your inbox'
    }
  ];

  const handleCheckboxChange = (id: string) => {
    setSelectedOptions(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ email, selectedOptions, optIn });
    // Handle form submission
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
      {/* Email Input */}
      <div className="mb-8">
        <label htmlFor="email" className="block text-black font-semibold mb-3">
          Email
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="e.g. hal.finney@email.com"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 text-gray-700"
          required
        />
      </div>

      {/* Checkbox Options */}
      <div className="mb-8 space-y-6">
        {checkboxOptions.map((option) => (
          <div key={option.id} className="flex items-start gap-3">
            <input
              type="checkbox"
              id={option.id}
              checked={selectedOptions.includes(option.id)}
              onChange={() => handleCheckboxChange(option.id)}
              className="mt-1 w-5 h-5 border-2 border-gray-400 rounded cursor-pointer accent-black"
            />
            <div>
              <label htmlFor={option.id} className="block font-semibold text-black cursor-pointer mb-1">
                {option.label}
              </label>
              <p className="text-gray-600 text-sm leading-relaxed">
                {option.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Opt-in */}
      <div className="mb-8">
        <p className="text-black font-semibold mb-4">
          Opt-in <span className="text-red-500">*</span>
        </p>
        <div className="flex items-start gap-3">
          <input
            type="checkbox"
            id="opt-in"
            checked={optIn}
            onChange={(e) => setOptIn(e.target.checked)}
            className="mt-1 w-5 h-5 border-2 border-gray-400 rounded cursor-pointer accent-black"
            required
          />
          <div>
            <label htmlFor="opt-in" className="block font-semibold text-black cursor-pointer mb-1">
              By subscribing, you agree to receive the content you&#39;ve selected.
            </label>
            <p className="text-gray-600 text-sm">
              You can unsubscribe at any time. For more details, check our Privacy Policy.
            </p>
          </div>
        </div>
      </div>

      {/* reCAPTCHA Placeholder */}
      <div className="mb-8 flex items-center gap-3 p-4 border border-gray-300 rounded-lg bg-gray-50 w-fit">
        <input
          type="checkbox"
          className="w-6 h-6 border-2 border-gray-400 rounded cursor-pointer"
          required
        />
        <div>
          <p className="text-sm font-medium text-gray-700">I&#39;m not a robot</p>
          <p className="text-xs text-gray-500">reCAPTCHA</p>
          <p className="text-xs text-gray-400">Privacy - Terms</p>
        </div>
      </div>

      {/* Submit Button */}
      <div className="flex justify-end">
        <button
          type="submit"
          className="px-12 py-4 bg-[#2C3532] text-white rounded-full font-semibold hover:bg-[#3d4642] transition-colors text-lg"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default ContactForm;