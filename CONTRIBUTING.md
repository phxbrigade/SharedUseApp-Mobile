# Contributing to Shared Use

Thank you! Your blood is the mortar that makes this community strong!

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

Your code is wonderful, and you're ready for others to bask in its greatness. But it doesn't do much good sitting on your machine. If you love something, set it free:

```
git push origin shared-use-git-guide
```

This will push all the commits that you've created up to the Github repo under the `shared-use-git-guide` branch. If you're collaborating with others you might do this often, but if you're working solo on a feature this might happen just before you create a pull request. What's that? Why, I'm glad you asked.

### Creating a Pull Request

Your feature is ready, and it's time to merge it into `dev`. Hooray! You're one step away from getting your code into the main development branch. Enter the pull request. There are two main ways to start one:

1. After you push your code, you might see a yellow box on the main code screen with your branch and a Green "Compare & Pull Request". Click that button to start the pull request for that branch.
2. On the main code screen, Click the "New Pull Request" Button.

Once you're on the pull request screen, you'll see two dropdowns:
- The first one is your "target" (which will usually be `dev`)
- The second one is your "source" (in this case `shared-use-git-guide`).

Select your source & destination, then assign it to one of the team leaders (info TBD) for review by using the selector on the right. If you like, you can also request other team members review your code to make sure everything looks ship-shape.

Once folks have reviewed your code, they might request changes. To respond to these requests, simply commit and push new code up to your branch:

```
git commit -am "Doh! Taylor found a typo"
git push origin shared-use-git-guide
```

Once your reviewers/assignees are satisfied, they'll hit the button to merge your code into `dev`, and you're done!
