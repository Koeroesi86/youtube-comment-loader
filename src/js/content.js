/**
 * Created by Chris on 18/01/2019.
 */

const viewRepliesButtonSelector = 'span.ytd-comment-replies-renderer';
const moreRepliesButtonSelector = 'paper-button.yt-next-continuation';
const expanderSelector = '#expander';
const commentBlockSelector = 'ytd-comment-renderer.ytd-comment-replies-renderer:last-of-type';
const commentListSelector = 'ytd-comment-replies-renderer.ytd-comment-thread-renderer';

const clickMoreReplies = target => {
  const clicker = setInterval(() => {
    const button = target.closest(expanderSelector).querySelector(moreRepliesButtonSelector);

    if (!button) {
      clearInterval(clicker);
    } else {
      button.click();
    }
    const lastReply = target.closest(commentListSelector).querySelector(commentBlockSelector);
    if (lastReply) lastReply.scrollIntoView(false);
  }, 100);
};

const listener = (e) => {
  const { target } = e;
  if (target.matches(viewRepliesButtonSelector)) {
    clickMoreReplies(target);
  }
};

document.body.addEventListener("click", listener);
