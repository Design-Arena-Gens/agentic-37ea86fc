'use client';

import { useState, useEffect } from 'react';
import './styles.css';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentFeature, setCurrentFeature] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    { icon: '🎯', title: 'محتوى احترافي', desc: 'دروس مصممة بعناية' },
    { icon: '🎬', title: 'فيديوهات تفاعلية', desc: 'تعلم بالصوت والصورة' },
    { icon: '📱', title: 'تعلم في أي وقت', desc: 'متاح على جميع الأجهزة' },
    { icon: '✅', title: 'شهادة معتمدة', desc: 'احصل على شهادتك' }
  ];

  const testimonials = [
    { name: 'أحمد محمد', text: 'أفضل كورس تعلمت منه الإنجليزية!', rating: 5 },
    { name: 'سارة علي', text: 'طريقة شرح رائعة وسهلة الفهم', rating: 5 },
    { name: 'خالد حسن', text: 'تحسنت مهاراتي بشكل كبير', rating: 5 }
  ];

  return (
    <div className="container">
      {/* Hero Section */}
      <section className={`hero ${isVisible ? 'visible' : ''}`}>
        <div className="hero-content">
          <div className="badge">🔥 أكثر من 50,000 طالب</div>
          <h1 className="hero-title">
            تعلم الإنجليزية
            <span className="gradient-text"> من الصفر</span>
            <br />
            حتى الاحتراف
          </h1>
          <p className="hero-subtitle">
            احترف اللغة الإنجليزية في 3 أشهر فقط مع كورسنا الشامل
            <br />
            دروس فيديو + تمارين تفاعلية + متابعة مستمرة
          </p>

          <div className="cta-buttons">
            <button className="btn-primary">
              <span>ابدأ الآن مجاناً</span>
              <span className="arrow">←</span>
            </button>
            <button className="btn-secondary">
              <span className="play-icon">▶</span>
              شاهد الفيديو التعريفي
            </button>
          </div>

          <div className="stats">
            <div className="stat">
              <div className="stat-number">50K+</div>
              <div className="stat-label">طالب</div>
            </div>
            <div className="stat">
              <div className="stat-number">4.9⭐</div>
              <div className="stat-label">تقييم</div>
            </div>
            <div className="stat">
              <div className="stat-number">200+</div>
              <div className="stat-label">درس</div>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="video-mockup">
            <div className="video-screen">
              <div className="video-content">
                <div className="play-button-large">
                  <div className="play-icon-large">▶</div>
                </div>
                <div className="video-info">
                  <div className="lesson-title">Lesson 1: Introduction</div>
                  <div className="progress-bar">
                    <div className="progress-fill"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Elements */}
          <div className="floating-card card-1">
            <span className="card-icon">📚</span>
            <span className="card-text">200+ Lessons</span>
          </div>
          <div className="floating-card card-2">
            <span className="card-icon">🎓</span>
            <span className="card-text">Certificate</span>
          </div>
          <div className="floating-card card-3">
            <span className="card-icon">💬</span>
            <span className="card-text">Live Chat</span>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2 className="section-title">لماذا تختار كورسنا؟</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`feature-card ${currentFeature === index ? 'active' : ''}`}
            >
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-desc">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Curriculum Section */}
      <section className="curriculum">
        <h2 className="section-title">محتوى الكورس</h2>
        <div className="curriculum-grid">
          <div className="curriculum-card">
            <div className="level-badge beginner">مستوى مبتدئ</div>
            <h3>المستوى الأول</h3>
            <ul className="curriculum-list">
              <li>✓ الحروف والأصوات</li>
              <li>✓ الكلمات الأساسية</li>
              <li>✓ الجمل البسيطة</li>
              <li>✓ المحادثات اليومية</li>
            </ul>
          </div>
          <div className="curriculum-card">
            <div className="level-badge intermediate">مستوى متوسط</div>
            <h3>المستوى الثاني</h3>
            <ul className="curriculum-list">
              <li>✓ القواعد المتقدمة</li>
              <li>✓ المفردات الموسعة</li>
              <li>✓ المحادثات المعقدة</li>
              <li>✓ الكتابة والتعبير</li>
            </ul>
          </div>
          <div className="curriculum-card">
            <div className="level-badge advanced">مستوى متقدم</div>
            <h3>المستوى الثالث</h3>
            <ul className="curriculum-list">
              <li>✓ الإنجليزية للأعمال</li>
              <li>✓ اللغة الأكاديمية</li>
              <li>✓ اختبارات IELTS/TOEFL</li>
              <li>✓ الطلاقة والاحتراف</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h2 className="section-title">آراء الطلاب</h2>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="stars">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i}>⭐</span>
                ))}
              </div>
              <p className="testimonial-text">"{testimonial.text}"</p>
              <div className="testimonial-author">{testimonial.name}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2 className="cta-title">ابدأ رحلتك في تعلم الإنجليزية اليوم!</h2>
          <p className="cta-subtitle">انضم لأكثر من 50,000 طالب وحقق حلمك</p>
          <div className="price-box">
            <div className="price-old">999 ريال</div>
            <div className="price-new">499 ريال</div>
            <div className="price-badge">خصم 50%</div>
          </div>
          <button className="btn-cta">
            سجل الآن واحصل على الخصم
          </button>
          <div className="guarantee">
            <span>✓</span> ضمان استرجاع المال خلال 30 يوم
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2024 كورس تعلم الإنجليزية - جميع الحقوق محفوظة</p>
      </footer>

      {/* Animated Background Elements */}
      <div className="bg-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>
    </div>
  );
}
