import { useState } from "react";
import { Button } from "../ui/button";

export function FormCard() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    whoYouNeedToHire: "",
    howManyPeople: "",
    howCanWeHelpYou: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };
  return (
    <div className="bg-white/80 backdrop-blur-3xl rounded-2xl p-8 shadow-xl border border-neuronhire-gray-6 h-auto">
      <div className="mb-6 text-center">
        <div className="inline-flex items-center gap-2 bg-neuronhire-gray-6 rounded-full px-4 py-2 mb-4">
          <span className="text-sm font-semibold text-neuronhire-black-100 body-satoshi">
            Contato
          </span>
          <span className="text-sm text-neuronhire-gray-64 body-satoshi">
            Agendar
          </span>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-3 border border-neuronhire-black-100/8 rounded-lg focus:ring-2 focus:ring-neuronhire-primary focus:border-transparent transition-all body-satoshi bg-white placeholder-neuronhire-gray-40"
            placeholder="Full name"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full px-4 py-3 border border-neuronhire-black-100/8 rounded-lg focus:ring-2 focus:ring-neuronhire-primary focus:border-transparent transition-all body-satoshi bg-white placeholder-neuronhire-gray-40"
              placeholder="Email"
            />
          </div>

          <div>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              className="w-full px-4 py-3 border border-neuronhire-black-100/8 rounded-lg focus:ring-2 focus:ring-neuronhire-primary focus:border-transparent transition-all body-satoshi bg-white placeholder-neuronhire-gray-40"
              placeholder="Phone"
            />
          </div>
        </div>

        <div>
          <select
            value={formData.whoYouNeedToHire}
            onChange={(e) =>
              setFormData({
                ...formData,
                whoYouNeedToHire: e.target.value,
              })
            }
            className="w-full px-4 py-3 border border-neuronhire-black-100/8 rounded-lg focus:ring-2 focus:ring-neuronhire-primary focus:border-transparent transition-all body-satoshi bg-white text-neuronhire-gray-40"
          >
            <option value="" disabled>
              Who you need to hire?
            </option>
            <option value="fullstack">Full Stack Developer</option>
            <option value="frontend">Frontend Developer</option>
            <option value="backend">Backend Developer</option>
            <option value="mobile">Mobile Developer</option>
            <option value="devops">DevOps Engineer</option>
            <option value="qa">QA Engineer</option>
            <option value="designer">UI/UX Designer</option>
            <option value="pm">Product Manager</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <select
            value={formData.howManyPeople}
            onChange={(e) =>
              setFormData({
                ...formData,
                howManyPeople: e.target.value,
              })
            }
            className="w-full px-4 py-3 border border-neuronhire-black-100/8 rounded-lg focus:ring-2 focus:ring-neuronhire-primary focus:border-transparent transition-all body-satoshi bg-white text-neuronhire-gray-40"
          >
            <option value="" disabled>
              How many people do you need to hire?
            </option>
            <option value="1">1 person</option>
            <option value="2-5">2-5 people</option>
            <option value="6-15">6-15 people</option>
            <option value="16-50">16-50 people</option>
            <option value="50+">50+ people</option>
          </select>
        </div>

        <div>
          <textarea
            value={formData.howCanWeHelpYou}
            onChange={(e) =>
              setFormData({
                ...formData,
                howCanWeHelpYou: e.target.value,
              })
            }
            rows={4}
            className="w-full px-4 pt-3 mb-7 border border-neuronhire-black-100/8 rounded-lg focus:ring-2 focus:ring-neuronhire-primary focus:border-transparent transition-all body-satoshi resize-none bg-white placeholder-neuronhire-gray-40"
            placeholder="How can we help you?"
          />
        </div>

        <div>
          <div
            className="inline-block p-0.5 rounded-full w-full"
            style={{ background: "var(--neuronhire-gradient-2)" }}
          >
            <Button
              type="submit"
              className="w-full bg-neuronhire-black-100 text-white py-4 text-lg font-semibold rounded-full hover:bg-neuronhire-gray-80 transition-colors body-mackinac border-0"
            >
              Book a Call
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
