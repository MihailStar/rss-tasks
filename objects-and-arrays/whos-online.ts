function isArrayEmpty(array: unknown[]): boolean {
  return array.length === 0;
}

function isKeyInObject<Obj extends object>(
  key: unknown,
  object: Obj
): key is keyof Obj {
  return (key as keyof Obj) in object;
}

const Status = {
  Online: 'online',
  Offline: 'offline',
} as const;

type StatusValue = typeof Status[keyof typeof Status];
type Friend = { username: string; status: StatusValue; lastActivity: number };

export function whosOnline(
  friends: Friend[]
): Record<StatusValue | 'away', Friend['username'][]> {
  const result: ReturnType<typeof whosOnline> = {
    online: [],
    offline: [],
    away: [],
  };

  friends.forEach((friend) => {
    if (friend.status === Status.Online) {
      if (friend.lastActivity > 10) {
        result.away.push(friend.username);
      } else {
        result.online.push(friend.username);
      }
    } else {
      result.offline.push(friend.username);
    }
  });

  Object.entries(result).forEach(([key, friendsNames]) => {
    if (isArrayEmpty(friendsNames) && isKeyInObject(key, result)) {
      delete result[key];
    }
  });

  return result;
}
