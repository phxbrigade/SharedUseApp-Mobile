# Contributing to Shared Use

Your blood is the mortar that makes this community strong!

## Git Guidelines

In case you're unfamiliar with git as a source control tool, here's a (hopefully) helpful guidebook to getting code committed and merged without too much heartache!

Shared Use is using the Git Flow model, which is based around a single repository with multiple branches. Most important of these are the `master` and `dev` branches.

`master` is where code goes before it is released. It's been reviewed and tested, and is generally in a pretty stable state.

`dev` is the development where new features are placed when they are ready.

### Creating a Feature Branch

To get started working on a new feature, first you need a branch to place your shiny new code. For example this guide is being developed under the name `shared-use-git-guide` from the `dev` branch:

```
git checkout dev
git checkout -b shared-use-git-guide
```

### Writing & Committing Code

Now you write your code just as before. When you're ready to save your progress, just commit:

```
git add CONTRIBUTING.md
git commit -m "Initial commit of Git Guide: first commit."
```

That's it! First just add the files that you want to be part of your commit, then run `git commit` to save them. You can (and should!) do this as often as you like while your branch is in development. Other variations:

- `git commit` without the `-m` will open up your system's editor. Saving should complete the commit (for example, `:wq` will complete the commit in `vi`)
- `git commit -a` will add all modified files to your commit
- `git commit -am "My message"` Will add all modified files and complete the commit with "My Message" as the commit message

### Pushing Code up to Github

When you're ready for your code to leave your machine so others can bask in its greatness, you need to push it up to github:

```
git push origin shared-use-git-guide
```
