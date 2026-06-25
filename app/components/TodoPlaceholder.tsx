type TodoPlaceholderProps = {
  children: React.ReactNode;
};

export function TodoPlaceholder({ children }: TodoPlaceholderProps) {
  return (
    <div className="rounded-md border-2 border-dashed border-primary/60 bg-primary/10 p-6 text-dark-navy">
      <p className="text-sm font-black uppercase tracking-[0.08em] text-primary">
        Content Placeholder
      </p>
      <div className="mt-3 text-base leading-7 text-body-gray">{children}</div>
    </div>
  );
}
