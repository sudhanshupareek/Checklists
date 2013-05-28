
/**
 * Module dependencies.
 */


/**
 * Expose the app
 */
exports.index = function(req, res, next) {
  var me = {
    href: '/me',
    checklists: {
      href: '/me/checklists',
      data: [
        { name: 'Morning Routine', href: '/checklist/17' },
        { name: 'Evening Routine', href: '/checklist/54' },
        { name: 'Email Handling', href: '/checklist/23' }
      ]
    },
    create_checklist: { src: '/checklists/create' }
  };

  res.json(me);
}

exports.checklists = function(req, res, next) {
  var checklists = {
    href: '/me/checklists',
    owner: { href: "/me" },
    data: [
      { name: 'Morning Routine', href: '/checklist/17' },
      { name: 'Evening Routine', href: '/checklist/54' },
      { name: 'Email Handling', href: '/checklist/23' }
    ],
    create_checklist: {
      action: '/me/checklists',
      method: 'POST',
      type: 'application/json',
      input: {
        name: { type: "text" },
        email: { type: "text" }
      }
    }
  }

  res.json(checklists);
}

exports.create = function(req, res, next) {
  console.log('body', req.body);
  res.redirect('/me/checklists');
}

exports.create_form = function(req, res, next) {
  var form = {
    action: '/checklists',
    method: 'POST',
    type: 'multipart/form-data',
    input: {
      name: { type: 'text', required: true },
      description: { type: 'textarea' },
      id: '329798230',
      file: { type: 'file' },
      state: {
        type: 'select',
        options: ["denial", "happiness", "ecstasy"]
      }
    }
  };

  res.json(form);
}