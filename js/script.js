// ============================================
// WE BUY AS-IS — site script
// Mobile nav, FAQ accordion, multi-step lead form,
// scroll reveal, animated comparison bars
// ============================================

document.addEventListener('DOMContentLoaded', function () {

  // ---- Mobile menu toggle ----
  var toggle = document.querySelector('.nav-toggle');
  var mobileMenu = document.querySelector('.mobile-menu');
  if (toggle && mobileMenu) {
    toggle.addEventListener('click', function () {
      mobileMenu.classList.toggle('open');
    });
    mobileMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mobileMenu.classList.remove('open');
      });
    });
  }

  // ---- FAQ accordion ----
  document.querySelectorAll('.faq-item').forEach(function (item) {
    var question = item.querySelector('.faq-question');
    var answer = item.querySelector('.faq-answer');
    if (!question || !answer) return;
    question.addEventListener('click', function () {
      var isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(function (i) {
        i.classList.remove('open');
        i.querySelector('.faq-answer').style.maxHeight = null;
      });
      if (!isOpen) {
        item.classList.add('open');
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });
  });

  // ---- Multi-step lead forms ----
  document.querySelectorAll('.lead-form').forEach(function (form) {
    var steps = form.querySelectorAll('.form-step');
    var progressBits = form.parentElement.querySelectorAll('.form-progress span');

    function showStep(index) {
      steps.forEach(function (s, i) { s.classList.toggle('active', i === index); });
      progressBits.forEach(function (b, i) {
        b.classList.toggle('done', i < index);
        b.classList.toggle('active', i === index);
      });
      form.dataset.step = index;
    }

    if (steps.length) {
      showStep(0);

      form.querySelectorAll('[data-next]').forEach(function (btn) {
        btn.addEventListener('click', function () {
          var current = parseInt(form.dataset.step || '0', 10);
          var currentStepEl = steps[current];
          var requiredFields = currentStepEl.querySelectorAll('input[required], select[required]');
          var valid = true;
          requiredFields.forEach(function (f) { if (!f.reportValidity()) valid = false; });
          if (!valid) return;
          if (current < steps.length - 1) showStep(current + 1);
        });
      });

      form.querySelectorAll('[data-back]').forEach(function (btn) {
        btn.addEventListener('click', function () {
          var current = parseInt(form.dataset.step || '0', 10);
          if (current > 0) showStep(current - 1);
        });
      });
    }

    // ---- Submission (Web3Forms) ----
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      var successBox = form.parentElement.querySelector('.form-success');
      var errorBox = form.parentElement.querySelector('.form-error');
      var submitBtn = form.querySelector('button[type="submit"]');
      var originalText = submitBtn ? submitBtn.textContent : '';

      if (successBox) successBox.classList.remove('show');
      if (errorBox) errorBox.classList.remove('show');
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending...';
      }

      var formData = new FormData(form);

      fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: formData
      })
        .then(function (response) { return response.json(); })
        .then(function (data) {
          if (data.success) {
            form.reset();
            if (steps.length) showStep(0);
            if (successBox) successBox.classList.add('show');
          } else {
            if (errorBox) errorBox.classList.add('show');
          }
        })
        .catch(function () {
          if (errorBox) errorBox.classList.add('show');
        })
        .finally(function () {
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.textContent = originalText;
          }
        });
    });
  });

  // ---- Scroll reveal + comparison bar animation ----
  var revealEls = document.querySelectorAll('.reveal');
  if (revealEls.length && 'IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          var bars = entry.target.querySelectorAll('.bar-fill');
          bars.forEach(function (bar) {
            var target = bar.getAttribute('data-width');
            if (target) requestAnimationFrame(function () { bar.style.width = target; });
          });
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach(function (el) { observer.observe(el); });
  } else {
    revealEls.forEach(function (el) {
      el.classList.add('visible');
      el.querySelectorAll('.bar-fill').forEach(function (bar) {
        var target = bar.getAttribute('data-width');
        if (target) bar.style.width = target;
      });
    });
  }

  // ---- Mark active nav link ----
  var current = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(function (link) {
    var href = link.getAttribute('href');
    if (href === current) link.classList.add('active');
  });

});
