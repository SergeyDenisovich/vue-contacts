# [Vue contacts app](https://sergeydenisovich.github.io/vue-contacts/)

App store data (contacts) in browser localStorage and has
next functionality: create contact, delete contact, cancel editing contact,
undo last change

## Application work

Application consists of 2 pages:

- Page 1:
  Adding a contact by clicking on the button, fields are required and have html5 validation.
  After creating a contact, it is displayed in the list.
  Each contact can be deleted after confirming the deletion.
  When you click on a contact, you go to page 2 with information about this contact.
- Page 2:
  Page 2 contains information about the selected contact.
  To change a contact, use the button "Edit contact", which opens a form for editing a contact.
  Adding new fields is done by pressing the button "Add field", which add new field with name and
  value, this field is saved to the contact and displayed in the form for editing without closing the form.
  As soon as new fields appear in the contact, a button appears "Edit contact",
  by clicking on which you can return the changes and take a step back.
  There is also a button "X" for each field. When you click on this button, the specified field is deleted.
  To close the edit form and go to the description of contact information, click on the button "Close edit".

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```
