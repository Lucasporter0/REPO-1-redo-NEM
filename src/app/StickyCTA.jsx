/* src/components/StickyCTA.module.css */

.bar {
  position: sticky;
  bottom: 0;
  z-index: 40;
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: center;
  padding: 12px;
  background: rgba(11, 18, 19, 0.85);
  backdrop-filter: blur(10px);
  border-top: 1px solid rgba(255, 255, 255, 0.12);
}

.text {
  color: #aeb8b6;
  font-size: 14px;
}

.button {
  background: #22c55e;
  color: #04110f;
  font-weight: 700;
  padding: 12px 18px;
  border-radius: 12px;
  text-decoration: none;
  border: 1px solid rgba(255, 255, 255, 0.12);
}
.button:hover { filter: brightness(1.05); }
