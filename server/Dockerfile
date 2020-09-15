FROM hayd/alpine-deno:1.4.0

# The port that your application listens to.
EXPOSE 8080

WORKDIR /app/web

# Prefer not to run as root.
USER deno

COPY . .

CMD ["run", "--allow-net", "server.ts"]
